---
layout: rule
title: asyncapi-operation-operationId
permalink: /asyncapi-operation-operationId/
summary: Operation must have "operationId".
slug: asyncapi-operation-operationId
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Operation must have "operationId".
message: null
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - truthy
properties:
  - operationId
given: '$.channels[*][publish,subscribe]'
definition: |-
  asyncapi-operation-operationId:
    description: Operation must have "operationId".
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: '$.channels[*][publish,subscribe]'
    then:
      field: operationId
      function: truthy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-operation-operationId
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
This operation ID is essentially a reference for the operation. Tools may use it for defining function names, class method names, and even URL hashes in documentation systems.
{% endraw %}
