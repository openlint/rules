---
layout: rule
title: asyncapi-channel-no-query-nor-fragment
permalink: /asyncapi-channel-no-query-nor-fragment/
summary: Channel path must not include query ("?") or fragment ("#") delimiter.
slug: asyncapi-channel-no-query-nor-fragment
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Channel path must not include query ("?") or fragment ("#") delimiter.
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
  asyncapi-channel-no-query-nor-fragment:
    description: Channel path must not include query ("?") or fragment ("#") delimiter.
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: $.channels
    then:
      field: '@key'
      function: pattern
      functionOptions:
        notMatch: '[\?#]'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-channel-no-query-nor-fragment
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Query parameters and fragments shouldn't be used in channel names. Instead, use bindings to define them.
{% endraw %}
