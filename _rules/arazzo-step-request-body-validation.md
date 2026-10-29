---
layout: rule
title: arazzo-step-request-body-validation
permalink: /arazzo-step-request-body-validation/
summary: >-
  Every step request body must have a valid `contentType` and use of runtime
  expressions.
slug: arazzo-step-request-body-validation
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: >-
  Every step request body must have a valid `contentType` and use of runtime
  expressions.
message: null
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
functions:
  - arazzoStepRequestBodyValidation
properties:
  - requestBody
given: $
definition: |-
  arazzo-step-request-body-validation:
    description: >-
      Every step request body must have a valid `contentType` and use of runtime
      expressions.
    severity: 0
    given: $
    then:
      function: arazzoStepRequestBodyValidation
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-step-request-body-validation
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Every step request body must have an expected `contentType` and expected use of runtime expressions.

The contentType value will be checked against the following regex:

```regex
/^(application|audio|font|example|image|message|model|multipart|text|video)\/[a-zA-Z0-9!#$&^_.+-]{1,127}$/
```

Rule Checks:

- if `payload` uses full runtime expression (e.g. $steps.steps1.outputs.responseBody) then it must be a valid/expected runtime expression
- If `replacements` are specified, then if a `value` uses a runtime expression it must be valid.

> \_inline use of runtime expressions within `payload` are not yet validated
{% endraw %}
