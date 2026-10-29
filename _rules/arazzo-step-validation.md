---
layout: rule
title: arazzo-step-validation
permalink: /arazzo-step-validation/
summary: >-
  Every step must have a valid "stepId" and an valid "operationId" or
  "operationPath" or "workflowId".
slug: arazzo-step-validation
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: >-
  Every step must have a valid "stepId" and an valid "operationId" or
  "operationPath" or "workflowId".
message: null
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
functions:
  - arazzoStepValidation
properties:
  - steps
given: $
definition: |-
  arazzo-step-validation:
    description: >-
      Every step must have a valid "stepId" and an valid "operationId" or
      "operationPath" or "workflowId".
    severity: 0
    given: $
    then:
      function: arazzoStepValidation
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/arazzo-rules/#arazzo-step-validation'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Every step must have a valid `stepId` and either a valid `operationId` or `operationPath` or `workflowId`. Defined runtime expressions are also validated.
{% endraw %}
