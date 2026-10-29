---
layout: rule
title: asyncapi-channel-no-trailing-slash
permalink: /asyncapi-channel-no-trailing-slash/
summary: Channel path must not end with slash.
slug: asyncapi-channel-no-trailing-slash
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Channel path must not end with slash.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
functions:
  - pattern
properties:
  - channels
given: $.channels
definition: |-
  asyncapi-channel-no-trailing-slash:
    description: Channel path must not end with slash.
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: $.channels
    then:
      field: '@key'
      function: pattern
      functionOptions:
        notMatch: .+\/$
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-channel-no-trailing-slash
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Keep trailing slashes off of channel names, as it can cause some confusion. Most messaging protocols will treat `example/foo` and `example/foo/` as different things. Keep in mind that tooling may replace slashes (`/`) with protocol-specific notation (e.g.: `.` for AMQP), therefore, a trailing slash may result in an invalid channel name in some protocols.
{% endraw %}
