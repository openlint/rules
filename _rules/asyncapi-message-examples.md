---
layout: rule
title: asyncapi-message-examples
permalink: /asyncapi-message-examples/
summary: Examples of message object should follow by "payload" and "headers" schemas.
slug: asyncapi-message-examples
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Examples of message object should follow by "payload" and "headers" schemas.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
functions:
  - asyncApi2MessageExamplesValidation
properties:
  - message
  - messageTraits
  - messages
  - oneOf
  - traits
given:
  - '$.channels.*.[publish,subscribe].message'
  - '$.channels.*.[publish,subscribe].message.oneOf.*'
  - '$.components.channels.*.[publish,subscribe].message'
  - '$.components.channels.*.[publish,subscribe].message.oneOf.*'
  - $.components.messages.*
  - '$.channels.*.[publish,subscribe].message.traits.*'
  - '$.channels.*.[publish,subscribe].message.oneOf.*.traits.*'
  - '$.components.channels.*.[publish,subscribe].message.traits.*'
  - '$.components.channels.*.[publish,subscribe].message.oneOf.*.traits.*'
  - $.components.messages.*.traits.*
  - $.components.messageTraits.*
definition: |-
  asyncapi-message-examples:
    description: Examples of message object should follow by "payload" and "headers" schemas.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given:
      - '$.channels.*.[publish,subscribe].message'
      - '$.channels.*.[publish,subscribe].message.oneOf.*'
      - '$.components.channels.*.[publish,subscribe].message'
      - '$.components.channels.*.[publish,subscribe].message.oneOf.*'
      - $.components.messages.*
      - '$.channels.*.[publish,subscribe].message.traits.*'
      - '$.channels.*.[publish,subscribe].message.oneOf.*.traits.*'
      - '$.components.channels.*.[publish,subscribe].message.traits.*'
      - '$.components.channels.*.[publish,subscribe].message.oneOf.*.traits.*'
      - $.components.messages.*.traits.*
      - $.components.messageTraits.*
    then:
      function: asyncApi2MessageExamplesValidation
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-message-examples
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
All `examples` in message object should follow `payload` and `headers` schemas.

**Bad Example**

```yaml
asyncapi: "2.0.0"
info:
  title: Bad API
  version: "1.0.0"
components:
  messages:
    someMessage:
      payload:
        type: string
      headers:
        type: object
      examples:
        - payload: 2137
          headers: someHeader
```

**Good Example**

```yaml
asyncapi: "2.0.0"
info:
  title: Good API
  version: "1.0.0"
components:
  messages:
    someMessage:
      payload:
        type: string
      headers:
        type: object
      examples:
        - payload: foobar
          headers:
            someHeader: someValue
```
{% endraw %}
