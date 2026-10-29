---
layout: rule
title: oas2-anyOf
permalink: /oas2-anyOf/
summary: 'anyOf is not available in OpenAPI v2, it was added in OpenAPI v3'
slug: oas2-anyOf
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: 'anyOf is not available in OpenAPI v2, it was added in OpenAPI v3'
message: '"anyOf" keyword must not be used in OpenAPI v2 document.'
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
functions:
  - undefined
properties:
  - anyOf
given: $..anyOf
definition: |-
  oas2-anyOf:
    description: 'anyOf is not available in OpenAPI v2, it was added in OpenAPI v3'
    message: '"anyOf" keyword must not be used in OpenAPI v2 document.'
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given: $..anyOf
    then:
      function: undefined
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#oas2-anyOf'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
OpenAPI v3 keyword `anyOf` detected in OpenAPI v2 document.
{% endraw %}
