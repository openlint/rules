---
layout: rule
title: commons-property-snake-case
permalink: /commons-property-snake-case/
summary: >-
  Property names are snake_case. Single-word names (id, name, email) are the
  most common form of all and satisfy every convention. Among multi-word names
  the market is split -- snake_case 44 providers, camelCase 41 in the CRM cohort
  -- so the commons picks one and the crosswalk carries the other. This is a
  choice, recorded as one.
slug: commons-property-snake-case
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  Property names are snake_case. Single-word names (id, name, email) are the
  most common form of all and satisfy every convention. Among multi-word names
  the market is split -- snake_case 44 providers, camelCase 41 in the CRM cohort
  -- so the commons picks one and the crosswalk carries the other. This is a
  choice, recorded as one.
message: '{{property}} is not snake_case (the common vocabulary''s casing).'
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
  - properties
given: '$..properties[*]~'
definition: |-
  rules:
    commons-property-snake-case:
      description: >-
        Property names are snake_case. Single-word names (id, name, email) are the
        most common form of all and satisfy every convention. Among multi-word
        names the market is split -- snake_case 44 providers, camelCase 41 in the
        CRM cohort -- so the commons picks one and the crosswalk carries the
        other. This is a choice, recorded as one.
      message: '{{property}} is not snake_case (the common vocabulary''s casing).'
      severity: info
      given: '$..properties[*]~'
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
