---
layout: rule
title: operation-description
permalink: /operation-description/
summary: Operation "description" must be present and non-empty string.
slug: operation-description
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Operation "description" must be present and non-empty string.
message: null
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
  - truthy
properties:
  - description
given: '#OperationObject'
definition: |-
  operation-description:
    description: Operation "description" must be present and non-empty string.
    recommended: true
    given: '#OperationObject'
    then:
      field: description
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#operation-description'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

