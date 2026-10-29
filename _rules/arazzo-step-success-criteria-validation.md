---
layout: rule
title: arazzo-step-success-criteria-validation
permalink: /arazzo-step-success-criteria-validation/
summary: 'Every success criteria must have a valid context, conditions, and types.'
slug: arazzo-step-success-criteria-validation
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: 'Every success criteria must have a valid context, conditions, and types.'
message: '{{error}}'
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
functions:
  - arazzoStepSuccessCriteriaValidation
properties:
  - workflows
given: '$.workflows[*]'
definition: |-
  arazzo-step-success-criteria-validation:
    description: 'Every success criteria must have a valid context, conditions, and types.'
    message: '{{error}}'
    severity: 0
    given: '$.workflows[*]'
    then:
      function: arazzoStepSuccessCriteriaValidation
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-step-success-criteria-validation
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Every success criteria must have a valid context, conditions, and types.

Rule checks:

- `condition` must be specified
- if `type` is defined then a `context` must be provided
- if `type` is an object then it must conform to an [Arazzo Specification Criterion Expression Type Object](https://spec.openapis.org/arazzo/v1.0.0.html#criterion-expression-type-object)
- if `type` is specified as "regex", then the condition must be a valid regex
- `context` must be a valid [Arazzo Specification Runtime Expressions](https://spec.openapis.org/arazzo/v1.0.0.html#runtime-expressions)

**Good Example**

```yaml
- context: $statusCode
  condition: "^200$"
  type: regex
```

**Bad Example**

```yaml
- context: hello
  condition: "^200$"
  type: regex
```
{% endraw %}
