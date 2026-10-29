---
layout: rule
title: path-not-include-query
permalink: /path-not-include-query/
summary: Path must not include query string.
slug: path-not-include-query
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Path must not include query string.
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
  - pattern
properties:
  - paths
given: $.paths
definition: |-
  path-not-include-query:
    description: Path must not include query string.
    recommended: true
    given: $.paths
    then:
      field: '@key'
      function: pattern
      functionOptions:
        notMatch: \?
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#path-not-include-query'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Don't put query string items in the path, they belong in parameters with `in: query`.
{% endraw %}
