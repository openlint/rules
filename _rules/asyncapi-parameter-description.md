---
layout: rule
title: asyncapi-parameter-description
permalink: /asyncapi-parameter-description/
summary: Parameter objects must have "description".
slug: asyncapi-parameter-description
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Parameter objects must have "description".
message: null
recommended: false
severity: warn
formats:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
functions:
  - truthy
properties:
  - description
given:
  - $.components.parameters.*
  - $.channels.*.parameters.*
definition: |-
  asyncapi-parameter-description:
    description: Parameter objects must have "description".
    recommended: false
    formats:
      - AsyncAPI 2.x
      - AsyncAPI 3.x
    given:
      - $.components.parameters.*
      - $.channels.*.parameters.*
    then:
      field: description
      function: truthy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-parameter-description
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Parameter objects should have a `description`.
{% endraw %}
