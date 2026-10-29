#!/usr/bin/env node
// Generates one page per rule in _rules/ and the machine-readable rules.json.
//
//   node tools/build.cjs --modules <node_modules with openlint installed> --docs <openlint/openlint checkout>
//
// Sources: the built-in rulesets in @openlint/openlint-rulesets, the prose and
// examples in the toolbox's docs/reference/*-rules.md, and the example rules in
// sources/*.yaml (from the specification and learn.openlint.org).
'use strict';
const fs = require('fs');
const path = require('path');

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith('--') ? [...acc, [a.slice(2), all[i + 1]]] : acc), []),
);
const root = path.resolve(__dirname, '..');
const modules = path.resolve(args.modules || path.join(root, 'node_modules'));
const docsRepo = args.docs && path.resolve(args.docs);
const req = (m) => require(path.join(modules, m));

const rulesets = req('@openlint/openlint-rulesets');
const rulesetsVersion = req('@openlint/openlint-rulesets/package.json').version;
const openlintVersion = fs.existsSync(path.join(modules, 'openlint/package.json')) ? req('openlint/package.json').version : null;
const YAML = req('@stoplight/yaml');

const BUILTIN = [
  { key: 'oas', id: 'spectral:oas', name: 'OpenAPI', doc: 'openapi-rules', src: 'packages/rulesets/src/oas/index.ts' },
  { key: 'asyncapi', id: 'spectral:asyncapi', name: 'AsyncAPI', doc: 'asyncapi-rules', src: 'packages/rulesets/src/asyncapi/index.ts' },
  { key: 'arazzo', id: 'spectral:arazzo', name: 'Arazzo', doc: 'arazzo-rules', src: 'packages/rulesets/src/arazzo/index.ts' },
];
const SEVERITY = ['error', 'warn', 'info', 'hint'];
const METHODS = /^(get|put|post|delete|options|head|patch|trace|query)$/;

// --- reference docs: "### slug" sections -----------------------------------

function docSections(file) {
  if (!docsRepo) return {};
  const p = path.join(docsRepo, 'docs/reference', `${file}.md`);
  if (!fs.existsSync(p)) return {};
  const out = {};
  let slug = null;
  for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
    const h = line.match(/^###\s+(\S+)\s*$/);
    if (h) { slug = h[1]; out[slug] = []; continue; }
    if (/^##\s/.test(line)) { slug = null; continue; }
    if (slug) out[slug].push(line);
  }
  for (const k of Object.keys(out)) {
    out[k] = out[k]
      .filter((l) => !/^\*\*(Recommended|Default severity when enabled):\*\*/.test(l))
      .join('\n')
      .replace(/\]\(#([a-z0-9.-]+)\)/g, '](/$1/)')
      .replace(/\]\((?:\.\.\/)+([^)#]+?)\.mdx?(#[^)]*)?\)/g, '](https://docs.openlint.org/$1/$2)')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }
  return out;
}

// --- properties a rule applies to -------------------------------------------

function aliasGivens(aliases, name) {
  const a = aliases && aliases[name];
  if (!a) return [];
  if (Array.isArray(a)) return a;
  return (a.targets || []).flatMap((t) => t.given);
}

function resolveGiven(aliases, given, depth = 0) {
  const list = Array.isArray(given) ? given : [given];
  return list.flatMap((g) => {
    const m = typeof g === 'string' && g.match(/^#([A-Za-z0-9_-]+)(.*)$/);
    if (!m || depth > 8) return [g];
    const base = aliasGivens(aliases, m[1]);
    if (!base.length) return [g];
    return resolveGiven(aliases, base.map((b) => b + m[2]), depth + 1);
  });
}

// The last named segment of a path: $.info.contact -> contact, ...[get,put] -> operation.
function lastSegment(p) {
  const tokens = [];
  const re = /\.\.?([A-Za-z_$@][\w$-]*)|\[\s*(\?\([^\]]*\)|\*|-?\d+|'[^']*'(?:\s*,\s*'[^']*')*|"[^"]*"|[\w-]+(?:\s*,\s*[\w-]+)*)\s*\]|\.\.?\*/g;
  let m;
  while ((m = re.exec(p))) {
    if (m[1]) tokens.push(m[1]);
    else if (m[2] && !/^(\*|\?|-?\d)/.test(m[2])) {
      const names = m[2].split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, ''));
      tokens.push(names.every((n) => METHODS.test(n)) ? ['operation'] : names);
    } else if (m[2] && m[2][0] === '?') {
      const f = m[2].match(/@property\s*===?\s*['"]([^'"]+)['"]/) || m[2].match(/@\.([A-Za-z_$][\w$-]*)/);
      tokens.push(f ? [f[1]] : null);
    }
  }
  const named = tokens.filter((t) => t && t !== '$');
  return named.length ? [].concat(named[named.length - 1]) : [];
}

// Rules that select the whole document ("$") and check it with a custom
// function: the property is what that function looks at.
const WHOLE_DOCUMENT = {
  'arazzo-step-failure-actions-validation': ['onFailure'],
  'arazzo-step-success-actions-validation': ['onSuccess'],
  'arazzo-step-output-validation': ['outputs'],
  'arazzo-step-parameters-validation': ['parameters'],
  'arazzo-step-request-body-validation': ['requestBody'],
  'arazzo-step-validation': ['steps'],
  'arazzo-workflow-depends-on-validation': ['dependsOn'],
  'arazzo-workflow-output-validation': ['outputs'],
  'arazzo-workflowId-unique': ['workflowId'],
  'asyncapi-channel-servers': ['servers'],
  'asyncapi-message-messageId-uniqueness': ['messageId'],
  'asyncapi-operation-operationId-uniqueness': ['operationId'],
  'oas3-unused-component': ['components'],
  'operation-tag-defined': ['tags'],
};

function properties(slug, rule, aliases) {
  if (WHOLE_DOCUMENT[slug]) return WHOLE_DOCUMENT[slug];
  const out = new Set();
  const thens = Array.isArray(rule.then) ? rule.then : [rule.then];
  for (const p of resolveGiven(aliases, rule.given)) {
    const segs = typeof p === 'string' ? lastSegment(p) : [];
    const fields = thens.map((t) => t && t.field).filter((f) => f && f !== '@key');
    if (fields.length) {
      for (const f of fields) out.add(String(f).split('.').pop());
    } else segs.forEach((x) => out.add(x));
    if (!segs.length && !fields.length) out.add('document');
  }
  out.delete(null);
  return [...out].sort();
}

// --- serialising a rule as it appears in a ruleset --------------------------

function plain(v) {
  if (typeof v === 'function') return v.name || 'function';
  if (Array.isArray(v)) return v.map(plain);
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, plain(x)]));
  return v;
}

function definition(rule) {
  const d = {};
  for (const k of ['description', 'message', 'severity', 'recommended', 'formats', 'given', 'resolved', 'then']) {
    if (rule[k] === undefined) continue;
    if (k === 'formats') d.formats = rule.formats.map((f) => f.displayName || f.name || f);
    else d[k] = plain(rule[k]);
  }
  return d;
}

const severityName = (s) => (s === undefined ? 'warn' : typeof s === 'number' ? SEVERITY[s] : s);
const fns = (rule) => [...new Set((Array.isArray(rule.then) ? rule.then : [rule.then]).map((t) => plain(t.function)))];

// --- collect ------------------------------------------------------------------

const rules = [];

for (const b of BUILTIN) {
  const rs = rulesets[b.key];
  const docs = docSections(b.doc);
  for (const [slug, rule] of Object.entries(rs.rules)) {
    const formats = (rule.formats || rs.formats || []).map((f) => f.displayName || f.name);
    rules.push({
      slug,
      source: 'built-in',
      ruleset: b.id,
      rulesetName: b.name,
      description: rule.description || '',
      message: rule.message || null,
      recommended: rule.recommended !== false,
      severity: severityName(rule.severity),
      formats: [...new Set(formats)],
      functions: fns(rule),
      properties: properties(slug, rule, rs.aliases),
      given: plain(rule.given),
      definition: YAML.safeStringify({ [slug]: definition(rule) }, { lineWidth: 0 }).trim(),
      docs: docs[slug] || '',
      links: [
        { name: 'Reference', url: `https://docs.openlint.org/reference/${b.doc}/#${slug}` },
        { name: 'Source', url: `https://github.com/openlint/openlint/blob/main/${b.src}` },
      ],
    });
  }
}

// Example rules from the specification and learn.openlint.org: sources/*.yaml
// Each file: { source, name, url, formats?, rules: { slug: { ...rule, notes? } } }
const srcDir = path.join(root, 'sources');
for (const f of fs.existsSync(srcDir) ? fs.readdirSync(srcDir).filter((x) => /\.ya?ml$/.test(x)).sort() : []) {
  const doc = YAML.parse(fs.readFileSync(path.join(srcDir, f), 'utf8'));
  for (const [slug, raw] of Object.entries(doc.rules)) {
    const { notes, ...rule } = raw;
    rules.push({
      slug,
      source: doc.source,
      ruleset: null,
      rulesetName: doc.name,
      description: rule.description || '',
      message: rule.message || null,
      recommended: rule.recommended !== false,
      severity: severityName(rule.severity),
      formats: doc.formats || [],
      functions: fns(rule),
      properties: properties(slug, rule, doc.aliases),
      given: rule.given,
      definition: YAML.safeStringify(
        { ...(doc.aliases && { aliases: doc.aliases }), rules: { [slug]: rule } },
        { lineWidth: 0 },
      ).trim(),
      docs: notes || '',
      links: [{ name: doc.name, url: doc.url }],
    });
  }
}

const seen = new Map();
for (const r of rules) {
  if (seen.has(r.slug)) throw new Error(`duplicate slug ${r.slug}: ${seen.get(r.slug)} and ${r.rulesetName}`);
  seen.set(r.slug, r.rulesetName);
}
rules.sort((a, b) => a.slug.localeCompare(b.slug));

// --- write ------------------------------------------------------------------

const outDir = path.join(root, '_rules');
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir);
for (const r of rules) {
  const { docs, ...front } = r;
  const fm = YAML.safeStringify({ layout: 'rule', title: r.slug, permalink: `/${r.slug}/`, summary: r.description, ...front }, { lineWidth: 0 });
  fs.writeFileSync(path.join(outDir, `${r.slug}.md`), `---\n${fm}---\n\n${docs ? `{% raw %}\n${docs}\n{% endraw %}\n` : ''}`);
}

const index = {
  generated: new Date().toISOString().slice(0, 10),
  openlint: openlintVersion,
  rulesets: rulesetsVersion,
  count: rules.length,
  rules: rules.map(({ docs, definition, ...r }) => ({ ...r, url: `https://rules.openlint.org/${r.slug}/` })),
};
fs.writeFileSync(path.join(root, 'rules.json'), JSON.stringify(index, null, 2) + '\n');

const missing = rules.filter((r) => r.source === 'built-in' && !r.docs).map((r) => r.slug);
console.log(`${rules.length} rules written${missing.length ? `; no reference docs for: ${missing.join(', ')}` : ''}`);
