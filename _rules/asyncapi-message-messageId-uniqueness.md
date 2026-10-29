---
layout: rule
title: asyncapi-message-messageId-uniqueness
permalink: /asyncapi-message-messageId-uniqueness/
summary: '"messageId" must be unique across all the messages.'
slug: asyncapi-message-messageId-uniqueness
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: '"messageId" must be unique across all the messages.'
message: null
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
functions:
  - asyncApi2MessageIdUniqueness
properties:
  - messageId
given: $
definition: |-
  asyncapi-message-messageId-uniqueness:
    description: '"messageId" must be unique across all the messages.'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: $
    then:
      function: asyncApi2MessageIdUniqueness
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-message-messageId-uniqueness
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
`messageId` must be unique across all the messages (except those one defined in the components).

**Bad Example**

```yaml
channels:
  smartylighting.streetlights.1.0.action.{streetlightId}.turn.on:
    publish:
      message:
        messageId: turnMessage
  smartylighting.streetlights.1.0.action.{streetlightId}.turn.off:
    publish:
      message:
        messageId: turnMessage
```

**Good Example**

```yaml
channels:
  smartylighting.streetlights.1.0.action.{streetlightId}.turn.on:
    publish:
      message:
        messageId: turnOnMessage
  smartylighting.streetlights.1.0.action.{streetlightId}.turn.off:
    publish:
      message:
        messageId: turnOffMessage
```
{% endraw %}
