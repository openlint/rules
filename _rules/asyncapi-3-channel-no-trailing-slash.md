---
layout: rule
title: asyncapi-3-channel-no-trailing-slash
permalink: /asyncapi-3-channel-no-trailing-slash/
summary: Channel address must not end with slash.
slug: asyncapi-3-channel-no-trailing-slash
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Channel address must not end with slash.
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
  - address
given: $.channels.*
definition: |-
  asyncapi-3-channel-no-trailing-slash:
    description: Channel address must not end with slash.
    recommended: true
    formats:
      - AsyncAPI 3.x
    given: $.channels.*
    then:
      field: address
      function: pattern
      functionOptions:
        notMatch: .+\/$
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-channel-no-trailing-slash
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Keep trailing slashes off of channel address, as it can cause some confusion. Most messaging protocols will treat `example/foo` and `example/foo/` as different things. Keep in mind that tooling may replace slashes (`/`) with protocol-specific notation (e.g.: `.` for AMQP), therefore, a trailing slash may result in an invalid channel address in some protocols.
{% endraw %}
