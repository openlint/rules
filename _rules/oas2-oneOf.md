---
layout: rule
title: oas2-oneOf
permalink: /oas2-oneOf/
summary: 'oneOf is not available in OpenAPI v2, it was added in OpenAPI v3'
slug: oas2-oneOf
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: 'oneOf is not available in OpenAPI v2, it was added in OpenAPI v3'
message: '"oneOf" keyword must not be used in OpenAPI v2 document.'
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
specs:
  - OpenAPI 2.0
functions:
  - undefined
properties:
  - oneOf
given: $..oneOf
definition: |-
  oas2-oneOf:
    description: 'oneOf is not available in OpenAPI v2, it was added in OpenAPI v3'
    message: '"oneOf" keyword must not be used in OpenAPI v2 document.'
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given: $..oneOf
    then:
      function: undefined
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#oas2-oneOf'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
OpenAPI v3 keyword `oneOf` detected in OpenAPI v2 document.
{% endraw %}
