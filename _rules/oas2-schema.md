---
layout: rule
title: oas2-schema
permalink: /oas2-schema/
summary: Validate structure of OpenAPI v2 specification.
slug: oas2-schema
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Validate structure of OpenAPI v2 specification.
message: '{{error}}.'
recommended: true
severity: error
formats:
  - OpenAPI 2.0 (Swagger)
functions:
  - oasDocumentSchema
properties:
  - document
given: $
definition: |-
  oas2-schema:
    description: Validate structure of OpenAPI v2 specification.
    message: '{{error}}.'
    severity: 0
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given: $
    resolved: false
    then:
      function: oasDocumentSchema
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#oas2-schema'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Validate structure of OpenAPI v2 specification.
{% endraw %}
