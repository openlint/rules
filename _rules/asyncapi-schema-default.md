---
layout: rule
title: asyncapi-schema-default
permalink: /asyncapi-schema-default/
summary: Default must be valid against its defined schema.
slug: asyncapi-schema-default
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Default must be valid against its defined schema.
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
  - default
given:
  - $.components.schemas.*.default^
  - $.components.parameters.*.schema.default^
  - $.channels.*.parameters.*.schema.default^
definition: |-
  asyncapi-schema-default:
    description: Default must be valid against its defined schema.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given:
      - $.components.schemas.*.default^
      - $.components.parameters.*.schema.default^
      - $.channels.*.parameters.*.schema.default^
    then:
      function: asyncApiSchemaValidation
      functionOptions:
        type: default
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-schema-default
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
`default` objects should be valid against the `schema` they decorate.
{% endraw %}
