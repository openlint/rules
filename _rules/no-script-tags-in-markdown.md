---
layout: rule
title: no-script-tags-in-markdown
permalink: /no-script-tags-in-markdown/
summary: Markdown descriptions must not have "<script>" tags.
slug: no-script-tags-in-markdown
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Markdown descriptions must not have "<script>" tags.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
specs:
  - OpenAPI 2.0
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - pattern
properties:
  - description
  - title
given: '$..[description,title]'
definition: |-
  no-script-tags-in-markdown:
    description: Markdown descriptions must not have "<script>" tags.
    recommended: true
    given: '$..[description,title]'
    then:
      function: pattern
      functionOptions:
        notMatch: <script
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#no-script-tags-in-markdown
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
This rule protects against a potential hack, for anyone bringing in description documents from third parties and then generating HTML documentation. If one of those third parties does something shady like injecting `<script>` tags, they could easily execute arbitrary code on your domain, which if it's the same as your main application could be all sorts of terrible.

**Bad Example**

```yaml
openapi: "3.0.2"
info:
  title: 'some title with <script>alert("You are Hacked");</script>',
```
{% endraw %}
