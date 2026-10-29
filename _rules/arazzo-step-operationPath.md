---
layout: rule
title: arazzo-step-operationPath
permalink: /arazzo-step-operationPath/
summary: It is recommended to use "operationId" rather than "operationPath".
slug: arazzo-step-operationPath
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: It is recommended to use "operationId" rather than "operationPath".
message: null
recommended: true
severity: hint
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - falsy
properties:
  - operationPath
given: '$.workflows[*].steps[*]'
definition: |-
  arazzo-step-operationPath:
    description: It is recommended to use "operationId" rather than "operationPath".
    severity: hint
    given: '$.workflows[*].steps[*]'
    then:
      field: operationPath
      function: falsy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-step-operationPath
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
It is recommended to use `operationId` rather than `operationPath` within a step to reference an API operation.
{% endraw %}
