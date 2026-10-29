---
layout: rule
title: operation-summary
permalink: /operation-summary/
summary: Every operation needs a summary.
slug: operation-summary
source: specification
ruleset: null
rulesetName: OpenLint Ruleset Specification
description: Every operation needs a summary.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 3.x
functions:
  - truthy
properties:
  - summary
given: '$.paths[*][''get'',''put'',''post'',''delete'',''options'',''head'',''patch'',''trace'']'
definition: |-
  aliases:
    Operation:
      - '$.paths[*][''get'',''put'',''post'',''delete'']'
  rules:
    operation-summary:
      description: Every operation needs a summary.
      severity: warn
      given: '$.paths[*][''get'',''put'',''post'',''delete'',''options'',''head'',''patch'',''trace'']'
      then:
        field: summary
        function: truthy
links:
  - name: OpenLint Ruleset Specification
    url: 'https://spec.openlint.org/v1/draft/#walkthrough'
---

{% raw %}
From the specification's running example, where it is defined in a shared base ruleset (`acme-base.yaml`) and raised to `error` for files under `legacy/` with an override.

{% endraw %}
