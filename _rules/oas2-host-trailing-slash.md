---
layout: rule
title: oas2-host-trailing-slash
permalink: /oas2-host-trailing-slash/
summary: Server URL must not have trailing slash.
slug: oas2-host-trailing-slash
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Server URL must not have trailing slash.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
functions:
  - pattern
properties:
  - host
given: $
definition: |-
  oas2-host-trailing-slash:
    description: Server URL must not have trailing slash.
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given: $
    then:
      field: host
      function: pattern
      functionOptions:
        notMatch: /$
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas2-host-trailing-slash
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Server URL should not have a trailing slash.
{% endraw %}
