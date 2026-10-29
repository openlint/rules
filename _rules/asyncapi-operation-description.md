---
layout: rule
title: asyncapi-operation-description
permalink: /asyncapi-operation-description/
summary: Operation "description" must be present and non-empty string.
slug: asyncapi-operation-description
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Operation "description" must be present and non-empty string.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - truthy
properties:
  - description
given: '$.channels[*][publish,subscribe]'
definition: |-
  asyncapi-operation-description:
    description: Operation "description" must be present and non-empty string.
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: '$.channels[*][publish,subscribe]'
    then:
      field: description
      function: truthy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-operation-description
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Operation objects should have a description.
{% endraw %}
