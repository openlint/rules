---
layout: rule
title: oas3-callbacks-in-callbacks
permalink: /oas3-callbacks-in-callbacks/
summary: ''
slug: oas3-callbacks-in-callbacks
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: ''
message: Callbacks should not be defined within a callback
recommended: true
severity: warn
formats:
  - OpenAPI 3.x
functions:
  - undefined
properties:
  - callbacks
given:
  - '#OperationObject.callbacks[*][*][*].callbacks'
definition: |-
  oas3-callbacks-in-callbacks:
    message: Callbacks should not be defined within a callback
    recommended: true
    formats:
      - OpenAPI 3.x
    given:
      - '#OperationObject.callbacks[*][*][*].callbacks'
    then:
      function: undefined
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas3-callbacks-in-callbacks
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

