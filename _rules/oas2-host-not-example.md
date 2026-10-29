---
layout: rule
title: oas2-host-not-example
permalink: /oas2-host-not-example/
summary: Host URL must not point at example.com.
slug: oas2-host-not-example
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Host URL must not point at example.com.
message: null
recommended: false
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
specs:
  - OpenAPI 2.0
functions:
  - pattern
properties:
  - host
given: $
definition: |-
  oas2-host-not-example:
    description: Host URL must not point at example.com.
    recommended: false
    formats:
      - OpenAPI 2.0 (Swagger)
    given: $
    then:
      field: host
      function: pattern
      functionOptions:
        notMatch: example\.com
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#oas2-host-not-example'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Server URL should not point to example.com.
{% endraw %}
