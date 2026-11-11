---
layout: rule
title: commons-query-param-snake-case
permalink: /commons-query-param-snake-case/
summary: >-
  Query parameters are snake_case. Lowercase single words are used by 181
  providers; snake_case (106) narrowly leads camelCase (102) among multi-word
  names.
slug: commons-query-param-snake-case
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  Query parameters are snake_case. Lowercase single words are used by 181
  providers; snake_case (106) narrowly leads camelCase (102) among multi-word
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
        Query parameters are snake_case. Lowercase single words are used by 181
        providers; snake_case (106) narrowly leads camelCase (102) among
        multi-word names.
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
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files, with duplicate catalog listings folded: 236 providers across the CRM and help desk contexts, read from OpenAPI the providers published themselves. They are regenerated into evidence/naming.yml each time a context is added. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: the common CRM and help desk OpenAPI documents are clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
