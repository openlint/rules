---
layout: rule
title: commons-path-segment-kebab-case
permalink: /commons-path-segment-kebab-case/
summary: >-
  Literal path segments are lowercase, words separated by hyphens. Lowercase
  single words are used by 130 of 134 providers; for multi-word segments
  kebab-case (71) leads snake_case (41) and camelCase (41).
slug: commons-path-segment-kebab-case
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  Literal path segments are lowercase, words separated by hyphens. Lowercase
  single words are used by 130 of 134 providers; for multi-word segments
  kebab-case (71) leads snake_case (41) and camelCase (41).
message: 'Path {{property}} has a segment that is not lowercase kebab-case.'
recommended: false
severity: warn
formats:
  - OpenAPI 3.x
specs:
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - pattern
properties:
  - paths
given: $.paths
definition: |-
  rules:
    commons-path-segment-kebab-case:
      description: >-
        Literal path segments are lowercase, words separated by hyphens. Lowercase
        single words are used by 130 of 134 providers; for multi-word segments
        kebab-case (71) leads snake_case (41) and camelCase (41).
      message: 'Path {{property}} has a segment that is not lowercase kebab-case.'
      severity: warn
      given: $.paths
      then:
        field: '@key'
        function: pattern
        functionOptions:
          match: '^(/([a-z0-9]+(-[a-z0-9]+)*|\{[^}]+\}|v[0-9][a-z0-9.]*))*/?$'
      recommended: false
links:
  - name: API Commons Naming
    url: 'https://github.com/api-commons/schema-commons'
---

{% raw %}
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files: 134 providers tagged CRM in APIs.io, 1,155 OpenAPI documents the providers published themselves. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: the common CRM OpenAPI (api-commons/crm openapi.yml) is clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
