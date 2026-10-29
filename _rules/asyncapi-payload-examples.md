---
layout: rule
title: asyncapi-payload-examples
permalink: /asyncapi-payload-examples/
summary: Examples must be valid against their defined schema.
slug: asyncapi-payload-examples
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Examples must be valid against their defined schema.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - asyncApiSchemaValidation
properties:
  - examples
given:
  - '$.components.messageTraits[?(@.schemaFormat === void 0)].payload.examples^'
  - '$.components.messages[?(@.schemaFormat === void 0)].payload.examples^'
  - >-
    $.channels[*][publish,subscribe][?(@property === 'message' && @.schemaFormat
    === void 0)].payload.examples^
definition: |-
  asyncapi-payload-examples:
    description: Examples must be valid against their defined schema.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given:
      - '$.components.messageTraits[?(@.schemaFormat === void 0)].payload.examples^'
      - '$.components.messages[?(@.schemaFormat === void 0)].payload.examples^'
      - >-
        $.channels[*][publish,subscribe][?(@property === 'message' &&
        @.schemaFormat === void 0)].payload.examples^
    then:
      function: asyncApiSchemaValidation
      functionOptions:
        type: examples
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-payload-examples
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Values of the `examples` array should be valid against the `payload` they decorate.

**Good Example**

```yaml
payload:
  type: object
  properties:
    value:
      type: integer
  required:
    - value
  examples:
    - value: 13
    - value: 17
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
  examples:
    - value: nope! # Wrong type
    - notGoodEither: 17 # Missing required property
```
{% endraw %}
