---
layout: rule
title: arazzo-workflow-output-validation
permalink: /arazzo-workflow-output-validation/
summary: >-
  Every workflow output must have unique name and its value must be a valid
  runtime expression.
slug: arazzo-workflow-output-validation
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: >-
  Every workflow output must have unique name and its value must be a valid
  runtime expression.
message: '{{error}}'
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
functions:
  - arazzoWorkflowOutputNamesValidation
properties:
  - outputs
given: $
definition: |-
  arazzo-workflow-output-validation:
    description: >-
      Every workflow output must have unique name and its value must be a valid
      runtime expression.
    message: '{{error}}'
    severity: 0
    given: $
    then:
      function: arazzoWorkflowOutputNamesValidation
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-workflow-output-validation
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Every workflow output must have unique name and its value must be a valid runtime expression.

Additionally, if output values use expressions like `$workflows.foo.steps.bar`, the rule will verify the existence of workflow `foo` and step `bar`.

**Good Example**

```yaml
  // Assuming that `TokenStep` is a defined step and that it exposes an output of `tokenResponse`
  outputs:
    access_token: $steps.TokenStep.outputs.tokenResponse
```

**Bad Example**

```yaml
outputs:
  access_token: $foo
```
{% endraw %}
