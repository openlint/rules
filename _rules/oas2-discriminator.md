---
layout: rule
title: oas2-discriminator
permalink: /oas2-discriminator/
summary: discriminator property must be defined and required
slug: oas2-discriminator
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: discriminator property must be defined and required
message: '{{error}}'
recommended: true
severity: error
formats:
  - OpenAPI 2.0 (Swagger)
functions:
  - oasDiscriminator
properties:
  - discriminator
given: '$.definitions[?(@.discriminator)]'
definition: |-
  oas2-discriminator:
    description: discriminator property must be defined and required
    message: '{{error}}'
    severity: 0
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given: '$.definitions[?(@.discriminator)]'
    then:
      function: oasDiscriminator
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#oas2-discriminator'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
The discriminator property MUST be defined at this schema and it MUST be in the required property list.
{% endraw %}
