---
layout: rule
title: asyncapi-3-operation-security
permalink: /asyncapi-3-operation-security/
summary: Operation have to reference a defined security schemes.
slug: asyncapi-3-operation-security
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Operation have to reference a defined security schemes.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 3.x
functions:
  - asyncApiSecurity
properties:
  - security
given: $.operations.*.security.*
definition: |-
  asyncapi-3-operation-security:
    description: Operation have to reference a defined security schemes.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 3.x
    given: $.operations.*.security.*
    then:
      function: asyncApiSecurity
      functionOptions:
        objectType: Operation
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-operation-security
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Operations must reference a defined security scheme.
{% endraw %}
