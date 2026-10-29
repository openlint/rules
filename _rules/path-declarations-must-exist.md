---
layout: rule
title: path-declarations-must-exist
permalink: /path-declarations-must-exist/
summary: ''
slug: path-declarations-must-exist
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: ''
message: 'Path parameter declarations must not be empty, ex."/given/{}" is invalid.'
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
functions:
  - pattern
properties:
  - paths
given: $.paths
definition: |-
  path-declarations-must-exist:
    message: 'Path parameter declarations must not be empty, ex."/given/{}" is invalid.'
    recommended: true
    given: $.paths
    then:
      field: '@key'
      function: pattern
      functionOptions:
        notMatch: '{}'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#path-declarations-must-exist
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Path parameter declarations cannot be empty, ex.`/given/{}` is invalid.
{% endraw %}
