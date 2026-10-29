---
layout: rule
title: arazzo-no-script-tags-in-markdown
permalink: /arazzo-no-script-tags-in-markdown/
summary: Markdown descriptions must not have "<script>" tags.
slug: arazzo-no-script-tags-in-markdown
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Markdown descriptions must not have "<script>" tags.
message: null
recommended: true
severity: warn
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - pattern
properties:
  - description
  - title
given: '$..[description,title]'
definition: |-
  arazzo-no-script-tags-in-markdown:
    description: Markdown descriptions must not have "<script>" tags.
    given: '$..[description,title]'
    then:
      function: pattern
      functionOptions:
        notMatch: <script
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-no-script-tags-in-markdown
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
This rule protects against a potential hack, for anyone bringing in Arazzo documents from third parties and then generating HTML documentation. If one of those third parties does something shady like injecting `<script>` tags, they could easily execute arbitrary code on your domain, which if it's the same as your main application could be all sorts of terrible.

**Bad Example**

```yaml
arazzo: "1.0.0"
info:
  title: 'some title with <script>alert("You are Hacked");</script>',
```
{% endraw %}
