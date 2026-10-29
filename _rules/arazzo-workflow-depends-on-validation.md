---
layout: rule
title: arazzo-workflow-depends-on-validation
permalink: /arazzo-workflow-depends-on-validation/
summary: Every workflow dependency must be valid.
slug: arazzo-workflow-depends-on-validation
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Every workflow dependency must be valid.
message: null
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - arazzoWorkflowDependsOnValidation
properties:
  - dependsOn
given: $
definition: |-
  arazzo-workflow-depends-on-validation:
    description: Every workflow dependency must be valid.
    severity: 0
    given: $
    then:
      function: arazzoWorkflowDependsOnValidation
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-workflow-depends-on-validation
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
The list of defined workflows within the `dependsOn` property must be unique and must be valid (e.g. the runtime expression must resolve to a defined workflow).
{% endraw %}
