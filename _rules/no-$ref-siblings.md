---
layout: rule
title: no-$ref-siblings
permalink: /no-$ref-siblings/
summary: Property must not be placed among $ref
slug: no-$ref-siblings
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Property must not be placed among $ref
message: '{{error}}'
recommended: true
severity: error
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.0.x
functions:
  - refSiblings
properties:
  - $ref
given: '$..[?(@property === ''$ref'')]'
definition: |-
  no-$ref-siblings:
    description: Property must not be placed among $ref
    message: '{{error}}'
    severity: 0
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
      - OpenAPI 3.0.x
    given: '$..[?(@property === ''$ref'')]'
    resolved: false
    then:
      function: refSiblings
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#no-$ref-siblings'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

