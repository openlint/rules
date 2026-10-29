---
layout: rule
title: oas2-api-schemes
permalink: /oas2-api-schemes/
summary: OpenAPI host "schemes" must be present and non-empty array.
slug: oas2-api-schemes
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: OpenAPI host "schemes" must be present and non-empty array.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
functions:
  - schema
properties:
  - schemes
given: $
definition: |-
  oas2-api-schemes:
    description: OpenAPI host "schemes" must be present and non-empty array.
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given: $
    then:
      field: schemes
      function: schema
      functionOptions:
        dialect: draft7
        schema:
          items:
            type: string
          minItems: 1
          type: array
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#oas2-api-schemes'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
OpenAPI host `schemes` must be present and non-empty array.
{% endraw %}
