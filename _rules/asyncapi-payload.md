---
layout: rule
title: asyncapi-payload
permalink: /asyncapi-payload/
summary: Payloads must be valid against AsyncAPI Schema object.
slug: asyncapi-payload
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Payloads must be valid against AsyncAPI Schema object.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - asyncApiPayloadValidation
properties:
  - payload
given:
  - '$.components.messageTraits[?(@.schemaFormat === void 0)].payload'
  - '$.components.messages[?(@.schemaFormat === void 0)].payload'
  - >-
    $.channels[*][publish,subscribe][?(@property === 'message' && @.schemaFormat
    === void 0)].payload
definition: |-
  asyncapi-payload:
    description: Payloads must be valid against AsyncAPI Schema object.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given:
      - '$.components.messageTraits[?(@.schemaFormat === void 0)].payload'
      - '$.components.messages[?(@.schemaFormat === void 0)].payload'
      - >-
        $.channels[*][publish,subscribe][?(@property === 'message' &&
        @.schemaFormat === void 0)].payload
    then:
      function: asyncApiPayloadValidation
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-payload'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
When `schemaFormat` is undefined, the `payload` object should be valid against the AsyncAPI v2 Schema Object definition.
{% endraw %}
