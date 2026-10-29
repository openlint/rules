---
layout: rule
title: arazzo-step-success-actions-validation
permalink: /arazzo-step-success-actions-validation/
summary: >-
  Every success action must have a unique "name", and the fields "workflowId"
  and "stepId" are mutually exclusive.
slug: arazzo-step-success-actions-validation
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: >-
  Every success action must have a unique "name", and the fields "workflowId"
  and "stepId" are mutually exclusive.
message: '{{error}}'
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - arazzoStepSuccessActionsValidation
properties:
  - onSuccess
given: $
definition: |-
  arazzo-step-success-actions-validation:
    description: >-
      Every success action must have a unique "name", and the fields "workflowId"
      and "stepId" are mutually exclusive.
    message: '{{error}}'
    severity: 0
    given: $
    then:
      function: arazzoStepSuccessActionsValidation
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-step-success-actions-validation
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Every success action must have a unique `name`, and the fields `workflowId` and `stepId` are mutually exclusive. Any runtime expressions used for `workflowId` or `stepId` must be valid and resolve to a defined workflow or step respectively.

Additionally rule checks:

- reusable success action references must be a valid Arazzo runtime expression (e.g. `$components.successActions.<name>`) and the referenced action must be existing within the components parameters
{% endraw %}
