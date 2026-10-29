---
layout: rule
title: asyncapi-3-channel-no-query-nor-fragment
permalink: /asyncapi-3-channel-no-query-nor-fragment/
summary: Channel address must not include query ("?") or fragment ("#") delimiter.
slug: asyncapi-3-channel-no-query-nor-fragment
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Channel address must not include query ("?") or fragment ("#") delimiter.
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
  asyncapi-3-channel-no-query-nor-fragment:
    description: Channel address must not include query ("?") or fragment ("#") delimiter.
    recommended: true
    formats:
      - AsyncAPI 3.x
    given: $.channels.*
    then:
      field: address
      function: pattern
      functionOptions:
        notMatch: '[\?#]'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-channel-no-query-nor-fragment
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Query parameters and fragments shouldn't be used in channel address. Instead, use bindings to define them, ex.`/given?test` is invalid.
{% endraw %}
