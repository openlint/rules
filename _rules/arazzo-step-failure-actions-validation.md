---
layout: rule
title: arazzo-step-failure-actions-validation
permalink: /arazzo-step-failure-actions-validation/
summary: >-
  Every failure action must have a unique "name", and the fields "workflowId"
  and "stepId" are mutually exclusive.
slug: arazzo-step-failure-actions-validation
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: >-
  Every failure action must have a unique "name", and the fields "workflowId"
  and "stepId" are mutually exclusive.
message: '{{error}}'
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
functions:
  - arazzoStepFailureActionsValidation
properties:
  - onFailure
given: $
definition: |-
  arazzo-step-failure-actions-validation:
    description: >-
      Every failure action must have a unique "name", and the fields "workflowId"
      and "stepId" are mutually exclusive.
    message: '{{error}}'
    severity: 0
    given: $
    then:
      function: arazzoStepFailureActionsValidation
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-step-failure-actions-validation
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Every failure action must have a unique `name`, and the fields `workflowId` and `stepId` are mutually exclusive. Any runtime expressions used for `workflowId` or `stepId` must be valid and resolve to a defined workflow or step respectively.

Additionally rule checks:

- reusable failure action references must be a valid Arazzo runtime expression (e.g. `$components.failureActions.<name>`) and the referenced action must be existing within the components parameters
{% endraw %}
