---
layout: rule
title: asyncapi-3-server-no-empty-variable
permalink: /asyncapi-3-server-no-empty-variable/
summary: Server host and pathname must not have empty variable substitution pattern.
slug: asyncapi-3-server-no-empty-variable
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Server host and pathname must not have empty variable substitution pattern.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 3.x
specs:
  - AsyncAPI 3.x
functions:
  - pattern
properties:
  - host
  - pathname
given:
  - '$.servers[*].host'
  - '$.servers[*].pathname'
definition: |-
  asyncapi-3-server-no-empty-variable:
    description: Server host and pathname must not have empty variable substitution pattern.
    recommended: true
    formats:
      - AsyncAPI 3.x
    given:
      - '$.servers[*].host'
      - '$.servers[*].pathname'
    then:
      function: pattern
      functionOptions:
        notMatch: '{}'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-server-no-empty-variable
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Server host and pathname variable declarations cannot be empty, ex.`gigantic-server.com{}` is invalid.
{% endraw %}
