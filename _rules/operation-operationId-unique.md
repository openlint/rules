---
layout: rule
title: operation-operationId-unique
permalink: /operation-operationId-unique/
summary: Every operation must have unique "operationId".
slug: operation-operationId-unique
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Every operation must have unique "operationId".
message: null
recommended: true
severity: error
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
  - oasOpIdUnique
properties:
  - paths
given: $.paths
definition: |-
  operation-operationId-unique:
    description: Every operation must have unique "operationId".
    severity: 0
    recommended: true
    given: $.paths
    then:
      function: oasOpIdUnique
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#operation-operationId-unique
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Every operation must have a unique `operationId`.

Why? A lot of documentation systems use this as an identifier, some SDK generators convert them to a method name, among other things.

**Bad Example**

```yaml
paths:
  /pet:
    patch:
      operationId: "update-pet"
      responses:
        200:
          description: ok
    put:
      operationId: "update-pet"
      responses:
        200:
          description: ok
```

**Good Example**

```yaml
paths:
  /pet:
    patch:
      operationId: "update-pet"
      responses:
        200:
          description: ok
    put:
      operationId: "replace-pet"
      responses:
        200:
          description: ok
```
{% endraw %}
