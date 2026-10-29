---
layout: rule
title: array-items
permalink: /array-items/
summary: ''
slug: array-items
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: ''
message: 'Schemas with "type: array", require a sibling "items" field'
recommended: true
severity: error
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
functions:
  - truthy
properties:
  - items
given: '#ArrayProperties'
definition: |-
  array-items:
    message: 'Schemas with "type: array", require a sibling "items" field'
    severity: 0
    recommended: true
    given: '#ArrayProperties'
    resolved: false
    then:
      function: truthy
      field: items
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#array-items'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Schemas with `type: array`, require a sibling `items` field.

**Good Example**

```yaml
TheGoodModel:
  type: object
  properties:
    favoriteColorSets:
      type: array
      items:
        type: array
        items: {}
```

**Bad Example**

```yaml
TheBadModel:
  type: object
  properties:
    favoriteColorSets:
      type: array
      items:
        type: array
```
{% endraw %}
