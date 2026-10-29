---
layout: rule
title: asyncapi-payload-default
permalink: /asyncapi-payload-default/
summary: Default must be valid against its defined schema.
slug: asyncapi-payload-default
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Default must be valid against its defined schema.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
functions:
  - asyncApiSchemaValidation
properties:
  - default
given:
  - '$.components.messageTraits[?(@.schemaFormat === void 0)].payload.default^'
  - '$.components.messages[?(@.schemaFormat === void 0)].payload.default^'
  - >-
    $.channels[*][publish,subscribe][?(@property === 'message' && @.schemaFormat
    === void 0)].payload.default^
definition: |-
  asyncapi-payload-default:
    description: Default must be valid against its defined schema.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given:
      - '$.components.messageTraits[?(@.schemaFormat === void 0)].payload.default^'
      - '$.components.messages[?(@.schemaFormat === void 0)].payload.default^'
      - >-
        $.channels[*][publish,subscribe][?(@property === 'message' &&
        @.schemaFormat === void 0)].payload.default^
    then:
      function: asyncApiSchemaValidation
      functionOptions:
        type: default
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-payload-default
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
`default` objects should be valid against the `payload` they decorate.

**Good Example**

```yaml
payload:
  type: object
  properties:
    value:
      type: integer
  required:
    - value
  default:
    value: 17
```

**Bad Example**

```yaml
payload:
  type: object
  properties:
    value:
      type: integer
  required:
    - value
  default:
    value: nope!
```
{% endraw %}
