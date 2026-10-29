---
layout: rule
title: asyncapi-server-variables
permalink: /asyncapi-server-variables/
summary: Server variables must be defined and there must be no redundant variables.
slug: asyncapi-server-variables
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Server variables must be defined and there must be no redundant variables.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - serverVariables
properties:
  - servers
given:
  - $.servers.*
  - $.components.servers.*
definition: |-
  asyncapi-server-variables:
    description: Server variables must be defined and there must be no redundant variables.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given:
      - $.servers.*
      - $.components.servers.*
    then:
      function: serverVariables
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-server-variables
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
All server URL variables should be defined in the `variables` object of the server. They should also not contain redundant variables that do not exist in the server address.
{% endraw %}
