---
layout: rule
title: duplicated-entry-in-enum
permalink: /duplicated-entry-in-enum/
summary: Enum values must not have duplicate entry.
slug: duplicated-entry-in-enum
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Enum values must not have duplicate entry.
message: '{{error}}'
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
  - oasSchema
properties:
  - enum
given:
  - >-
    $..[?(@property !== 'properties' && @ != null && @.enum &&
    @.enum.constructor.name === 'Array')]
definition: |-
  duplicated-entry-in-enum:
    description: Enum values must not have duplicate entry.
    message: '{{error}}'
    severity: warn
    recommended: true
    given:
      - >-
        $..[?(@property !== 'properties' && @ != null && @.enum &&
        @.enum.constructor.name === 'Array')]
    then:
      field: enum
      function: oasSchema
      functionOptions:
        schema:
          type: array
          uniqueItems: true
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#duplicated-entry-in-enum
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Each value of an `enum` must be different from one another.

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
        - 3
        - 2
```
{% endraw %}
