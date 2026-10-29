---
layout: rule
title: oas2-api-host
permalink: /oas2-api-host/
summary: OpenAPI "host" must be present and non-empty string.
slug: oas2-api-host
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: OpenAPI "host" must be present and non-empty string.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
functions:
  - truthy
properties:
  - host
given: $
definition: |-
  oas2-api-host:
    description: OpenAPI "host" must be present and non-empty string.
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given: $
    then:
      field: host
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#oas2-api-host'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
OpenAPI `host` must be present and non-empty string.
{% endraw %}
