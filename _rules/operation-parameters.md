---
layout: rule
title: operation-parameters
permalink: /operation-parameters/
summary: Operation parameters are unique and non-repeating.
slug: operation-parameters
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Operation parameters are unique and non-repeating.
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
  - oasOpParams
properties:
  - parameters
given: '#OperationObject.parameters'
definition: |-
  operation-parameters:
    description: Operation parameters are unique and non-repeating.
    message: '{{error}}'
    recommended: true
    given: '#OperationObject.parameters'
    then:
      function: oasOpParams
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#operation-parameters'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Operation parameters are unique and non-repeating.

1. Operations must have unique `name` + `in` parameters.
2. Operation cannot have both `in: body` and `in: formData` parameters. (OpenAPI v2.0)
3. Operation must have only one `in: body` parameter. (OpenAPI v2.0)
{% endraw %}
