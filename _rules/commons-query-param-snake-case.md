---
layout: rule
title: commons-query-param-snake-case
permalink: /commons-query-param-snake-case/
summary: >-
  Query parameters are snake_case. Lowercase single words are used by 109
  providers; snake_case (69) narrowly leads camelCase (64) among multi-word
  names.
slug: commons-query-param-snake-case
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  Query parameters are snake_case. Lowercase single words are used by 109
  providers; snake_case (69) narrowly leads camelCase (64) among multi-word
  names.
message: 'Query parameter {{value}} is not snake_case.'
recommended: false
severity: info
formats:
  - OpenAPI 3.x
specs:
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - casing
properties:
  - name
given: '$.paths[*][*].parameters[?(@.in == ''query'')].name'
definition: |-
  rules:
    commons-query-param-snake-case:
      description: >-
        Query parameters are snake_case. Lowercase single words are used by 109
        providers; snake_case (69) narrowly leads camelCase (64) among multi-word
        names.
      message: 'Query parameter {{value}} is not snake_case.'
      severity: info
      given: '$.paths[*][*].parameters[?(@.in == ''query'')].name'
      then:
        function: casing
        functionOptions:
          type: snake
      recommended: false
links:
  - name: API Commons Naming
    url: 'https://github.com/api-commons/schema-commons'
---

{% raw %}
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files: 134 providers tagged CRM in APIs.io, 1,155 OpenAPI documents the providers published themselves. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: the common CRM OpenAPI (api-commons/crm openapi.yml) is clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
