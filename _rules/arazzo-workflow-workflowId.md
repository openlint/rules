---
layout: rule
title: arazzo-workflow-workflowId
permalink: /arazzo-workflow-workflowId/
summary: 'Workflow "workflowId" should follow the pattern "^[A-Za-z0-9_\-]+$".'
slug: arazzo-workflow-workflowId
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: 'Workflow "workflowId" should follow the pattern "^[A-Za-z0-9_\-]+$".'
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
  - workflowId
given: '$.workflows[*]'
definition: |-
  arazzo-workflow-workflowId:
    description: 'Workflow "workflowId" should follow the pattern "^[A-Za-z0-9_\-]+$".'
    severity: warn
    given: '$.workflows[*]'
    then:
      field: workflowId
      function: pattern
      functionOptions:
        match: '^[A-Za-z0-9_\-]+$'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-workflow-workflowId
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Workflow `workflowId` defined should follow the pattern `^[A-Za-z0-9_\\-]+$`. This is good practice as tools and libraries can use the `workflowId` to uniquely identify a workflow.
{% endraw %}
