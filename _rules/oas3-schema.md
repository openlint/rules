---
layout: rule
title: oas3-schema
permalink: /oas3-schema/
summary: Validate structure of OpenAPI v3 specification.
slug: oas3-schema
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Validate structure of OpenAPI v3 specification.
message: '{{error}}.'
recommended: true
severity: error
formats:
  - OpenAPI 3.x
functions:
  - oasDocumentSchema
properties:
  - document
given: $
definition: |-
  oas3-schema:
    description: Validate structure of OpenAPI v3 specification.
    message: '{{error}}.'
    severity: 0
    recommended: true
    formats:
      - OpenAPI 3.x
    given: $
    resolved: false
    then:
      function: oasDocumentSchema
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#oas3-schema'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Validate structure of OpenAPI v3 specification.
If OpenAPI 3.1 or 3.2 is used, `jsonSchemaDialect` is not respected and the draft 2020-12 is applied.
If you define your own `jsonSchemaDialect`, you'll most likely want to disable this rule.
{% endraw %}
