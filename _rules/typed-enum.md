---
layout: rule
title: typed-enum
permalink: /typed-enum/
summary: Enum values must respect the specified type.
slug: typed-enum
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Enum values must respect the specified type.
message: '{{error}}'
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
functions:
  - typedEnum
properties:
  - enum
given: '$..[?(@ && @.enum && @.type)]'
definition: |-
  typed-enum:
    description: Enum values must respect the specified type.
    message: '{{error}}'
    recommended: true
    given: '$..[?(@ && @.enum && @.type)]'
    then:
      function: typedEnum
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#typed-enum'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Enum values should respect the `type` specifier.

**Good Example**

```yaml
TheGoodModel:
  type: object
  properties:
    number_of_connectors:
      type: integer
      description: The number of extension points.
      enum:
        - 1
        - 2
        - 4
        - 8
```

**Bad Example**

```yaml
TheBadModel:
  type: object
  properties:
    number_of_connectors:
      type: integer
      description: The number of extension points.
      enum:
        - 1
        - 2
        - "a string!"
        - 8
```
{% endraw %}
