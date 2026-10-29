---
layout: rule
title: asyncapi-schema-examples
permalink: /asyncapi-schema-examples/
summary: Examples must be valid against their defined schema.
slug: asyncapi-schema-examples
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
  - $.components.schemas.*.examples^
  - $.components.parameters.*.schema.examples^
  - $.channels.*.parameters.*.schema.examples^
definition: |-
  asyncapi-schema-examples:
    description: Examples must be valid against their defined schema.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given:
      - $.components.schemas.*.examples^
      - $.components.parameters.*.schema.examples^
      - $.channels.*.parameters.*.schema.examples^
    then:
      function: asyncApiSchemaValidation
      functionOptions:
        type: examples
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-schema-examples
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Values of the `examples` array should be valid against the `schema` they decorate.
{% endraw %}
