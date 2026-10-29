---
layout: rule
title: operation-tags
permalink: /operation-tags/
summary: Operation must have non-empty "tags" array.
slug: operation-tags
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Operation must have non-empty "tags" array.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
functions:
  - schema
properties:
  - tags
given: '#OperationObject'
definition: |-
  operation-tags:
    description: Operation must have non-empty "tags" array.
    recommended: true
    given: '#OperationObject'
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
    url: 'https://docs.openlint.org/reference/openapi-rules/#operation-tags'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Operation should have non-empty `tags` array.
{% endraw %}
