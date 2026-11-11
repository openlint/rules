---
layout: rule
title: commons-path-segment-kebab-case
permalink: /commons-path-segment-kebab-case/
summary: >-
  Literal path segments are lowercase, words separated by hyphens. Lowercase
  single words are used by 1586 providers; for multi-word segments kebab-case
  (928) leads snake_case (503) and camelCase (370).
slug: commons-path-segment-kebab-case
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  Literal path segments are lowercase, words separated by hyphens. Lowercase
  single words are used by 1586 providers; for multi-word segments kebab-case
  (928) leads snake_case (503) and camelCase (370).
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
        single words are used by 1586 providers; for multi-word segments
        kebab-case (928) leads snake_case (503) and camelCase (370).
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
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files, with duplicate listings and shared specifications folded: 1651 providers across seven contexts (CRM, help desk, commerce, payments, card issuing, billing, messaging), read from OpenAPI the providers published themselves. They are re-measured and rendered into the ruleset each time a context is added. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: the seven common OpenAPI documents are clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
