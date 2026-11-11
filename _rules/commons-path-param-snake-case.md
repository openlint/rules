---
layout: rule
title: commons-path-param-snake-case
permalink: /commons-path-param-snake-case/
summary: >-
  Path parameters are snake_case and name the thing they identify
  ({contact_id}). A bare {id} is the most common single form (144 providers) and
  passes; camelCase (116) leads snake_case (82) among multi-word names, so this
  is info, not a warning.
slug: commons-path-param-snake-case
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  Path parameters are snake_case and name the thing they identify
  ({contact_id}). A bare {id} is the most common single form (144 providers) and
  passes; camelCase (116) leads snake_case (82) among multi-word names, so this
  is info, not a warning.
message: 'Path {{property}} has a parameter that is not snake_case.'
recommended: false
severity: info
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
    commons-path-param-snake-case:
      description: >-
        Path parameters are snake_case and name the thing they identify
        ({contact_id}). A bare {id} is the most common single form (144 providers)
        and passes; camelCase (116) leads snake_case (82) among multi-word names,
        so this is info, not a warning.
      message: 'Path {{property}} has a parameter that is not snake_case.'
      severity: info
      given: $.paths
      then:
        field: '@key'
        function: pattern
        functionOptions:
          notMatch: '\{[^}]*[A-Z-][^}]*\}'
      recommended: false
links:
  - name: API Commons Naming
    url: 'https://github.com/api-commons/schema-commons'
---

{% raw %}
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files, with duplicate catalog listings folded: 236 providers across the CRM and help desk contexts, read from OpenAPI the providers published themselves. They are regenerated into evidence/naming.yml each time a context is added. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: the common CRM and help desk OpenAPI documents are clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
