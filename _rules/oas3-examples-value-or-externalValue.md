---
layout: rule
title: oas3-examples-value-or-externalValue
permalink: /oas3-examples-value-or-externalValue/
summary: Examples must have either "value" or "externalValue" field.
slug: oas3-examples-value-or-externalValue
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Examples must have either "value" or "externalValue" field.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 3.x
specs:
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - xor
properties:
  - examples
given:
  - '$.components.examples[*]'
  - '$.paths[*][*]..content[*].examples[*]'
  - '$.paths[*][*]..parameters[*].examples[*]'
  - '$.components.parameters[*].examples[*]'
  - '$.paths[*][*]..headers[*].examples[*]'
  - '$.components.headers[*].examples[*]'
definition: |-
  oas3-examples-value-or-externalValue:
    description: Examples must have either "value" or "externalValue" field.
    recommended: true
    formats:
      - OpenAPI 3.x
    given:
      - '$.components.examples[*]'
      - '$.paths[*][*]..content[*].examples[*]'
      - '$.paths[*][*]..parameters[*].examples[*]'
      - '$.components.parameters[*].examples[*]'
      - '$.paths[*][*]..headers[*].examples[*]'
      - '$.components.headers[*].examples[*]'
    then:
      function: xor
      functionOptions:
        properties:
          - externalValue
          - value
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas3-examples-value-or-externalValue
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Examples for `requestBody` or response examples can have an `externalValue` or a `value`, but they cannot have both.

**Bad Example**

```yaml
paths:
  /pet:
    put:
      operationId: "replace-pet"
      requestBody:
        content:
          "application/json":
            examples:
              foo:
                summary: A foo example
                value: { "foo": "bar" }
                externalValue: "http://example.org/foo.json"
                # marp! no, can only have one or the other
```
{% endraw %}
