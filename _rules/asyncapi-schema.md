---
layout: rule
title: asyncapi-schema
permalink: /asyncapi-schema/
summary: Validate structure of AsyncAPI specification.
slug: asyncapi-schema
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Validate structure of AsyncAPI specification.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
functions:
  - function
properties:
  - document
given: $
definition: |-
  asyncapi-schema:
    description: Validate structure of AsyncAPI specification.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: $
    then:
      function: function
      functionOptions:
        resolved: true
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-schema'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Validate structure of AsyncAPI specification.
{% endraw %}
