---
layout: rule
title: no-eval-in-markdown
permalink: /no-eval-in-markdown/
summary: Markdown descriptions must not have "eval(".
slug: no-eval-in-markdown
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Markdown descriptions must not have "eval(".
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
  no-eval-in-markdown:
    description: Markdown descriptions must not have "eval(".
    recommended: true
    given: '$..[description,title]'
    then:
      function: pattern
      functionOptions:
        notMatch: eval\(
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#no-eval-in-markdown'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
This rule protects against an edge case, for anyone bringing in description documents from third parties and using the parsed content rendered in HTML/JS. If one of those third parties does something shady like injecting `eval()` JavaScript statements, it could lead to an XSS attack.

**Bad Example**

```yaml
openapi: "3.0.2"
info:
  title: 'some title with eval(',
```
{% endraw %}
