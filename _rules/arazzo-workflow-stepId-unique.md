---
layout: rule
title: arazzo-workflow-stepId-unique
permalink: /arazzo-workflow-stepId-unique/
summary: Every step must have unique "stepId".
slug: arazzo-workflow-stepId-unique
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Every step must have unique "stepId".
message: '{{error}}'
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - arazzoStepIdUniqueness
properties:
  - workflows
given: '$.workflows[*]'
definition: |-
  arazzo-workflow-stepId-unique:
    description: Every step must have unique "stepId".
    message: '{{error}}'
    severity: 0
    given: '$.workflows[*]'
    then:
      function: arazzoStepIdUniqueness
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-workflow-stepId-unique
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Every `stepId` defined within a workflow must be unique

**Good Example**

```yaml
workflows:
  - workflowId: someWorkflow
    parameters:
      - in: cookie
        name: workflowLevelParamOne
        value: someValue
      - in: header
        name: workflowLevelParamTwo
        value: someValue
    steps:
      - stepId: post-step
        parameters:
          - in: cookie
            name: foo
            value: some_value
        operationId: createResource
      - stepId: get-step
        operationId: getResource
```

**Bad Example**

```yaml
workflows:
  - workflowId: someWorkflow
    parameters:
      - in: cookie
        name: workflowLevelParamOne
        value: someValue
      - in: header
        name: workflowLevelParamTwo
        value: someValue
    steps:
      - stepId: post-step
        parameters:
          - in: cookie
            name: foo
            value: some_value
        operationId: createResource
      - stepId: post-step
        operationId: getResource
```
{% endraw %}
