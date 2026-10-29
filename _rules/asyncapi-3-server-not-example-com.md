---
layout: rule
title: asyncapi-3-server-not-example-com
permalink: /asyncapi-3-server-not-example-com/
summary: Server host must not point at example.com.
slug: asyncapi-3-server-not-example-com
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Server host must not point at example.com.
message: null
recommended: false
severity: warn
formats:
  - AsyncAPI 3.x
functions:
  - pattern
properties:
  - host
given: $.servers.*.host
definition: |-
  asyncapi-3-server-not-example-com:
    description: Server host must not point at example.com.
    recommended: false
    formats:
      - AsyncAPI 3.x
    given: $.servers.*.host
    then:
      function: pattern
      functionOptions:
        notMatch: example\.com
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-server-not-example-com
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Server host should not point to example.com.
{% endraw %}
