---
layout: rule
title: arazzo-step-stepId
permalink: /arazzo-step-stepId/
summary: 'Step "stepId" should follow the pattern "^[A-Za-z0-9_\-]+$".'
slug: arazzo-step-stepId
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: 'Step "stepId" should follow the pattern "^[A-Za-z0-9_\-]+$".'
message: null
recommended: true
severity: warn
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - pattern
properties:
  - stepId
given: '$.workflows[*].steps[*]'
definition: |-
  arazzo-step-stepId:
    description: 'Step "stepId" should follow the pattern "^[A-Za-z0-9_\-]+$".'
    severity: warn
    given: '$.workflows[*].steps[*]'
    then:
      field: stepId
      function: pattern
      functionOptions:
        match: '^[A-Za-z0-9_\-]+$'
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/arazzo-rules/#arazzo-step-stepId'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Step `stepId` defined should follow the pattern `^[A-Za-z0-9_\\-]+$`. This is good practice as tools and libraries can use the `stepId` to uniquely identify a step.
{% endraw %}
