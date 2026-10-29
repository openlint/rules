---
layout: rule
title: operation-singular-tag
permalink: /operation-singular-tag/
summary: Operation must not have more than a single tag.
slug: operation-singular-tag
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Operation must not have more than a single tag.
message: null
recommended: false
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
functions:
  - length
properties:
  - tags
given: '#OperationObject'
definition: |-
  operation-singular-tag:
    description: Operation must not have more than a single tag.
    recommended: false
    given: '#OperationObject'
    then:
      field: tags
      function: length
      functionOptions:
        max: 1
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#operation-singular-tag'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Use just one tag for an operation, which is helpful for some documentation systems which use tags to avoid duplicate content.
{% endraw %}
