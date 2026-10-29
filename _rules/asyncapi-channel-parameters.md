---
layout: rule
title: asyncapi-channel-parameters
permalink: /asyncapi-channel-parameters/
summary: Channel parameters must be defined and there must be no redundant parameters.
slug: asyncapi-channel-parameters
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Channel parameters must be defined and there must be no redundant parameters.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
specs:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
functions:
  - asyncApiChannelParameters
properties:
  - channels
given:
  - $.channels.*
  - $.components.channels.*
definition: |-
  asyncapi-channel-parameters:
    description: >-
      Channel parameters must be defined and there must be no redundant
      parameters.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
      - AsyncAPI 3.x
    given:
      - $.channels.*
      - $.components.channels.*
    then:
      function: asyncApiChannelParameters
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-channel-parameters
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
All channel parameters should be defined in the `parameters` object of the channel. They should also not contain redundant parameters that do not exist in the channel address.
{% endraw %}
