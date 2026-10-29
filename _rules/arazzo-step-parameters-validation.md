---
layout: rule
title: arazzo-step-parameters-validation
permalink: /arazzo-step-parameters-validation/
summary: Step parameters and workflow parameters must valid.
slug: arazzo-step-parameters-validation
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Step parameters and workflow parameters must valid.
message: '{{error}}'
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - arazzoStepParametersValidation
properties:
  - parameters
given: $
definition: |-
  arazzo-step-parameters-validation:
    description: Step parameters and workflow parameters must valid.
    message: '{{error}}'
    severity: 0
    given: $
    then:
      function: arazzoStepParametersValidation
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-step-parameters-validation
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Parameters must be unique based on their combination of `name` and `in` properties when defined at the workflow level or within a step. Step parameters can override workflow level parameters.

Additionally rule checks:

- reusable parameter references must be a valid Arazzo runtime expression (e.g. `$components.parameters.<name>`) and the referenced parameter must be existing within the components parameters
- parameter values using expressions, must be a valid Arazzo Specification Runtime Expressions](https://spec.openapis.org/arazzo/v1.0.0.html#runtime-expressions). Additionally, if parameter values use expressions like `$workflows.foo.steps.bar`, the rule will verify the existence of workflow `foo` and step `bar`.

**Good Example**

```yaml
parameters:
  - name: username
    in: query
    value: $inputs.username
```

**Bad Example**

```yaml
parameters:
  - name: username
    in: query
    value: $foo
```
{% endraw %}
