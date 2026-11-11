---
layout: rule
title: commons-timestamp-at-suffix
permalink: /commons-timestamp-at-suffix/
summary: >-
  Timestamps end in _at (created_at, updated_at). 444 providers use the _at
  form, 173 a bare created/updated, 131 a _date, _time or "on" suffix
  (createdon, add_time).
slug: commons-timestamp-at-suffix
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  Timestamps end in _at (created_at, updated_at). 444 providers use the _at
  form, 173 a bare created/updated, 131 a _date, _time or "on" suffix
  (createdon, add_time).
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
        Timestamps end in _at (created_at, updated_at). 444 providers use the _at
        form, 173 a bare created/updated, 131 a _date, _time or "on" suffix
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
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files, with duplicate listings and shared specifications folded: 1651 providers across seven contexts (CRM, help desk, commerce, payments, card issuing, billing, messaging), read from OpenAPI the providers published themselves. They are re-measured and rendered into the ruleset each time a context is added. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: the seven common OpenAPI documents are clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
