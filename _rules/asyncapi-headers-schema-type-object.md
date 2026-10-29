---
layout: rule
title: asyncapi-headers-schema-type-object
permalink: /asyncapi-headers-schema-type-object/
summary: Headers schema type must be "object".
slug: asyncapi-headers-schema-type-object
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Headers schema type must be "object".
message: 'Headers schema type must be "object" ({{error}}).'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - schema
properties:
  - headers
given:
  - $.components.messageTraits.*.headers
  - $.components.messages.*.headers
  - '$.channels.*.[publish,subscribe].message.headers'
  - '$.channels.*.[publish,subscribe].message.traits[*].headers'
definition: |-
  asyncapi-headers-schema-type-object:
    description: Headers schema type must be "object".
    message: 'Headers schema type must be "object" ({{error}}).'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given:
      - $.components.messageTraits.*.headers
      - $.components.messages.*.headers
      - '$.channels.*.[publish,subscribe].message.headers'
      - '$.channels.*.[publish,subscribe].message.traits[*].headers'
    then:
      function: schema
      functionOptions:
        allErrors: true
        schema:
          type: object
          properties:
            type:
              enum:
                - object
          required:
            - type
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-headers-schema-type-object
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
The schema definition of the application headers must be of type “object”.
{% endraw %}
