---
layout: rule
title: path-params
permalink: /path-params/
summary: Path parameters must be defined and valid.
slug: path-params
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Path parameters must be defined and valid.
message: '{{error}}'
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
  - oasPathParam
properties:
  - paths
given: $.paths
definition: |-
  path-params:
    description: Path parameters must be defined and valid.
    message: '{{error}}'
    severity: 0
    recommended: true
    given: $.paths
    then:
      function: oasPathParam
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#path-params'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Path parameters are correct and valid.

1. For every parameter referenced in the path string (i.e: `/users/{userId}`), the parameter must be defined in either
   `path.parameters`, or `operation.parameters` objects (non-standard HTTP operations will be silently ignored.)

2. every `path.parameters` and `operation.parameters` parameter must be used in the path string.
{% endraw %}
