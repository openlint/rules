---
layout: rule
title: commons-property-snake-case
permalink: /commons-property-snake-case/
summary: >-
  Property names are snake_case. Single-word names (id, name, email) are the
  most common form of all (3057 providers) and satisfy every convention. Among
  multi-word names the market is evenly split -- camelCase 1609 providers,
  snake_case 1565 -- so the count cannot decide it. The commons uses snake_case
  because it has one spelling for an acronym (customer_id, never customerID or
  customerId) and the crosswalk carries camelCase names without loss. A
  decision, recorded as one.
slug: commons-property-snake-case
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  Property names are snake_case. Single-word names (id, name, email) are the
  most common form of all (3057 providers) and satisfy every convention. Among
  multi-word names the market is evenly split -- camelCase 1609 providers,
  snake_case 1565 -- so the count cannot decide it. The commons uses snake_case
  because it has one spelling for an acronym (customer_id, never customerID or
  customerId) and the crosswalk carries camelCase names without loss. A
  decision, recorded as one.
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
given: '$..properties[?(!@property.match(/^x-/))]~'
definition: |-
  rules:
    commons-property-snake-case:
      description: >-
        Property names are snake_case. Single-word names (id, name, email) are the
        most common form of all (3057 providers) and satisfy every convention.
        Among multi-word names the market is evenly split -- camelCase 1609
        providers, snake_case 1565 -- so the count cannot decide it. The commons
        uses snake_case because it has one spelling for an acronym (customer_id,
        never customerID or customerId) and the crosswalk carries camelCase names
        without loss. A decision, recorded as one.
      message: '{{property}} is not snake_case (the common vocabulary''s casing).'
      severity: info
      given: '$..properties[?(!@property.match(/^x-/))]~'
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
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files, with duplicate listings and shared specifications folded: 5,552 providers across 57 bounded contexts, read from OpenAPI the providers published themselves. They are re-measured and rendered into the ruleset each time a context is added. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: all 57 common OpenAPI documents are clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
