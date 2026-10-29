---
layout: rule
title: arazzo-step-output-validation
permalink: /arazzo-step-output-validation/
summary: >-
  Every step output must have unique name and its value must be a valid runtime
  expression.
slug: arazzo-step-output-validation
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: >-
  Every step output must have unique name and its value must be a valid runtime
  expression.
message: '{{error}}'
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
functions:
  - arazzoStepOutputNamesValidation
properties:
  - outputs
given: $
definition: |-
  arazzo-step-output-validation:
    description: >-
      Every step output must have unique name and its value must be a valid
      runtime expression.
    message: '{{error}}'
    severity: 0
    given: $
    then:
      function: arazzoStepOutputNamesValidation
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-step-output-validation
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Every step output must have unique name and its value must be a valid runtime expression.

Then validating the expression the rule checks against known prefixes described in the [Arazzo Specification Runtime Expressions](https://spec.openapis.org/arazzo/v1.0.0.html#runtime-expressions). Additionally, if output values use expressions like `$workflows.foo.steps.bar`, the rule will verify the existence of workflow `foo` and step `bar`.
{% endraw %}
