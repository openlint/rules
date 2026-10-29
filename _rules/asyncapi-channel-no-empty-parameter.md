---
layout: rule
title: asyncapi-channel-no-empty-parameter
permalink: /asyncapi-channel-no-empty-parameter/
summary: Channel path must not have empty parameter substitution pattern.
slug: asyncapi-channel-no-empty-parameter
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Channel path must not have empty parameter substitution pattern.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - pattern
properties:
  - channels
given: $.channels
definition: |-
  asyncapi-channel-no-empty-parameter:
    description: Channel path must not have empty parameter substitution pattern.
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: $.channels
    then:
      field: '@key'
      function: pattern
      functionOptions:
        notMatch: '{}'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-channel-no-empty-parameter
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Channel parameter declarations cannot be empty, ex.`/given/{}` is invalid.
{% endraw %}
