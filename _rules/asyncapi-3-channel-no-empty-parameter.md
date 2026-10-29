---
layout: rule
title: asyncapi-3-channel-no-empty-parameter
permalink: /asyncapi-3-channel-no-empty-parameter/
summary: Channel address must not have empty parameter substitution pattern.
slug: asyncapi-3-channel-no-empty-parameter
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Channel address must not have empty parameter substitution pattern.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 3.x
functions:
  - pattern
properties:
  - address
given: $.channels.*
definition: |-
  asyncapi-3-channel-no-empty-parameter:
    description: Channel address must not have empty parameter substitution pattern.
    recommended: true
    formats:
      - AsyncAPI 3.x
    given: $.channels.*
    then:
      field: address
      function: pattern
      functionOptions:
        notMatch: '{}'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-channel-no-empty-parameter
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Channel address parameter declarations cannot be empty, ex.`/given/{}` is invalid.
{% endraw %}
