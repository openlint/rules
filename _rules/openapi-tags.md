---
layout: rule
title: openapi-tags
permalink: /openapi-tags/
summary: OpenAPI object must have non-empty "tags" array.
slug: openapi-tags
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: OpenAPI object must have non-empty "tags" array.
message: null
recommended: false
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
  - schema
properties:
  - tags
given: $
definition: |-
  openapi-tags:
    description: OpenAPI object must have non-empty "tags" array.
    recommended: false
    given: $
    then:
      field: tags
      function: schema
      functionOptions:
        dialect: draft7
        schema:
          type: array
          minItems: 1
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#openapi-tags'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
OpenAPI object should have non-empty `tags` array.

Why? Well, you _can_ reference tags arbitrarily in operations, and definition is optional...

```yaml
/invoices/{id}/items:
  get:
    tags:
      - Invoice Items
```

Defining tags allows you to add more information like a `description`. For more information see [tag-description](/tag-description/).
{% endraw %}
