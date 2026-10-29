---
layout: rule
title: asyncapi-3-operation-description
permalink: /asyncapi-3-operation-description/
summary: Operation "description" must be present and non-empty string.
slug: asyncapi-3-operation-description
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Operation "description" must be present and non-empty string.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 3.x
functions:
  - truthy
properties:
  - description
given: $.operations.*
definition: |-
  asyncapi-3-operation-description:
    description: Operation "description" must be present and non-empty string.
    recommended: true
    formats:
      - AsyncAPI 3.x
    given: $.operations.*
    then:
      field: description
      function: truthy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-operation-description
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Operation objects should have a description.
{% endraw %}
