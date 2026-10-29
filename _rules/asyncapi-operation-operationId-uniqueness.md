---
layout: rule
title: asyncapi-operation-operationId-uniqueness
permalink: /asyncapi-operation-operationId-uniqueness/
summary: '"operationId" must be unique across all the operations.'
slug: asyncapi-operation-operationId-uniqueness
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: '"operationId" must be unique across all the operations.'
message: null
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - asyncApi2OperationIdUniqueness
properties:
  - operationId
given: $
definition: |-
  asyncapi-operation-operationId-uniqueness:
    description: '"operationId" must be unique across all the operations.'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: $
    then:
      function: asyncApi2OperationIdUniqueness
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-operation-operationId-uniqueness
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
`operationId` must be unique across all the operations (except the ones defined in the components).

**Bad Example**

```yaml
channels:
  smartylighting.streetlights.1.0.action.{streetlightId}.turn.on:
    publish:
      operationId: turn
  smartylighting.streetlights.1.0.action.{streetlightId}.turn.off:
    publish:
      operationId: turn
```

**Good Example**

```yaml
channels:
  smartylighting.streetlights.1.0.action.{streetlightId}.turn.on:
    publish:
      operationId: turnOn
  smartylighting.streetlights.1.0.action.{streetlightId}.turn.off:
    publish:
      operationId: turnOff
```
{% endraw %}
