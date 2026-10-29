---
layout: rule
title: asyncapi-server-not-example-com
permalink: /asyncapi-server-not-example-com/
summary: Server URL must not point at example.com.
slug: asyncapi-server-not-example-com
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Server URL must not point at example.com.
message: null
recommended: false
severity: warn
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - pattern
properties:
  - url
given: '$.servers[*].url'
definition: |-
  asyncapi-server-not-example-com:
    description: Server URL must not point at example.com.
    recommended: false
    formats:
      - AsyncAPI 2.x
    given: '$.servers[*].url'
    then:
      function: pattern
      functionOptions:
        notMatch: example\.com
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-server-not-example-com
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Server URL should not point to example.com.
{% endraw %}
