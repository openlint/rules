---
layout: rule
title: asyncapi-latest-version
permalink: /asyncapi-latest-version/
summary: Checking if the AsyncAPI document is using the latest version.
slug: asyncapi-latest-version
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Checking if the AsyncAPI document is using the latest version.
message: The latest version is not used. You should update to the "3.1.0" version.
recommended: true
severity: info
formats:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
specs:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
functions:
  - schema
properties:
  - asyncapi
given: $.asyncapi
definition: |-
  asyncapi-latest-version:
    description: Checking if the AsyncAPI document is using the latest version.
    message: The latest version is not used. You should update to the "3.1.0" version.
    severity: info
    recommended: true
    formats:
      - AsyncAPI 2.x
      - AsyncAPI 3.x
    given: $.asyncapi
    then:
      function: schema
      functionOptions:
        schema:
          const: 3.1.0
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-latest-version
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Checking if the AsyncAPI document is using the latest version.
{% endraw %}
