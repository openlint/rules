# rules.openlint.org

A registry of OpenLint rules. Every rule has its own page at `rules.openlint.org/<rule-key>/`, and the home page lists them all, searchable and filterable by the property each rule applies to, its ruleset and its severity. The same list is published as data at [`rules.json`](https://rules.openlint.org/rules.json).

## Where the rules come from

- **Built-in rulesets.** Every rule in `spectral:oas`, `spectral:asyncapi` and `spectral:arazzo`, read from `@openlint/openlint-rulesets` in the pinned OpenLint release, with the prose and examples from the toolbox's `docs/reference/*-rules.md`.
- **The specification.** The running example in the [OpenLint Ruleset Specification](https://spec.openlint.org/v1/draft/#walkthrough), in `sources/specification.yaml`.
- **Learn.** Rules from [learn.openlint.org](https://learn.openlint.org), in `sources/learn.yaml`.

## Regenerating

The pages in `_rules/` and `rules.json` are generated; don't edit them by hand.

```sh
npm install
git clone https://github.com/openlint/openlint ../openlint   # for the reference docs
npm run build
bundle exec jekyll serve   # or: jekyll serve
```

To add a rule that isn't built in, add it to a file in `sources/` with a `notes` field for its page, and regenerate. Each rule key must be unique across the registry.

"Applies to" is worked out from the rule's `given` (with aliases expanded) and `then.field`. Rules that select the whole document and check it with a custom function are mapped by hand in `WHOLE_DOCUMENT` in `tools/build.cjs`.

## License

Code is Apache 2.0. Rule text from the toolbox's reference docs is Apache 2.0, as in [openlint/openlint](https://github.com/openlint/openlint).
