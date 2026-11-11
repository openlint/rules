---
layout: rule
title: commons-foreign-key-id-suffix
permalink: /commons-foreign-key-id-suffix/
summary: >-
  A reference to another resource is named <resource>_id (company_id, owner_id).
  camelCase ...Id is used by 42 providers and snake_case _id by 36; the commons
  keeps snake_case for consistency with commons-property-snake-case.
slug: commons-foreign-key-id-suffix
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  A reference to another resource is named <resource>_id (company_id, owner_id).
  camelCase ...Id is used by 42 providers and snake_case _id by 36; the commons
  keeps snake_case for consistency with commons-property-snake-case.
message: '{{property}} is a reference; the common form is <resource>_id.'
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
  - properties
given: $..properties
definition: |-
  rules:
    commons-foreign-key-id-suffix:
      description: >-
        A reference to another resource is named <resource>_id (company_id,
        owner_id). camelCase ...Id is used by 42 providers and snake_case _id by
        36; the commons keeps snake_case for consistency with
        commons-property-snake-case.
      message: '{{property}} is a reference; the common form is <resource>_id.'
      severity: info
      given: $..properties
      then:
        field: '@key'
        function: pattern
        functionOptions:
          notMatch: '[a-z0-9](Id|ID)$'
      recommended: false
links:
  - name: API Commons Naming
    url: 'https://github.com/api-commons/schema-commons'
---

{% raw %}
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files: 134 providers tagged CRM in APIs.io, 1,155 OpenAPI documents the providers published themselves. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: the common CRM OpenAPI (api-commons/crm openapi.yml) is clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
