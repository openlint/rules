---
layout: rule
title: commons-timestamp-at-suffix
permalink: /commons-timestamp-at-suffix/
summary: >-
  Timestamps end in _at (created_at, updated_at). 37 providers use the _at form,
  30 a bare created/updated, 17 a _date, _time or "on" suffix (createdon,
  add_time).
slug: commons-timestamp-at-suffix
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  Timestamps end in _at (created_at, updated_at). 37 providers use the _at form,
  30 a bare created/updated, 17 a _date, _time or "on" suffix (createdon,
  add_time).
message: >-
  {{property}} looks like a timestamp; the common form is created_at /
  updated_at.
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
  - properties
given: $..properties
definition: |-
  rules:
    commons-timestamp-at-suffix:
      description: >-
        Timestamps end in _at (created_at, updated_at). 37 providers use the _at
        form, 30 a bare created/updated, 17 a _date, _time or "on" suffix
        (createdon, add_time).
      message: >-
        {{property}} looks like a timestamp; the common form is created_at /
        updated_at.
      severity: warn
      given: $..properties
      then:
        field: '@key'
        function: pattern
        functionOptions:
          notMatch: >-
            ^(created|updated|modified|deleted)(_?(date|time|on|On|Date|Time))?$|^(add|update|create|modify)_?[tT]ime$|^date_?(created|modified|updated)$
      recommended: false
links:
  - name: API Commons Naming
    url: 'https://github.com/api-commons/schema-commons'
---

{% raw %}
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files: 134 providers tagged CRM in APIs.io, 1,155 OpenAPI documents the providers published themselves. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: the common CRM OpenAPI (api-commons/crm openapi.yml) is clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
