---
layout: rule
title: asyncapi-server-no-empty-variable
permalink: /asyncapi-server-no-empty-variable/
summary: Server URL must not have empty variable substitution pattern.
slug: asyncapi-server-no-empty-variable
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Server URL must not have empty variable substitution pattern.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
functions:
  - pattern
properties:
  - url
given: '$.servers[*].url'
definition: |-
  asyncapi-server-no-empty-variable:
    description: Server URL must not have empty variable substitution pattern.
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: '$.servers[*].url'
    then:
      function: pattern
      functionOptions:
        notMatch: '{}'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-server-no-empty-variable
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Server URL variable declarations cannot be empty, ex.`gigantic-server.com/{}` is invalid.
{% endraw %}
