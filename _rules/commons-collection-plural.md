---
layout: rule
title: commons-collection-plural
permalink: /commons-collection-plural/
summary: >-
  A collection is named with a plural noun (/contacts, not /contact). 835
  providers name collections in the plural, 414 use a singular somewhere.
slug: commons-collection-plural
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  A collection is named with a plural noun (/contacts, not /contact). 835
  providers name collections in the plural, 414 use a singular somewhere.
message: 'Collection path {{property}} ends in a singular segment.'
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
    commons-collection-plural:
      description: >-
        A collection is named with a plural noun (/contacts, not /contact). 835
        providers name collections in the plural, 414 use a singular somewhere.
      message: 'Collection path {{property}} ends in a singular segment.'
      severity: info
      given: $.paths
      then:
        field: '@key'
        function: pattern
        functionOptions:
          notMatch: >-
            /(contact|company|deal|lead|activity|task|note|pipeline|person|organization|account|opportunity)$
      recommended: false
links:
  - name: API Commons Naming
    url: 'https://github.com/api-commons/schema-commons'
---

{% raw %}
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files, with duplicate listings and shared specifications folded: 1258 providers across the CRM, help desk, commerce, payments and card issuing contexts, read from OpenAPI the providers published themselves. They are re-measured and rendered into the ruleset each time a context is added. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: the five common OpenAPI documents are clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
