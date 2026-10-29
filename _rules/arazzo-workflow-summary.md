---
layout: rule
title: arazzo-workflow-summary
permalink: /arazzo-workflow-summary/
summary: Workflow "summary" should be present and non-empty string.
slug: arazzo-workflow-summary
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Workflow "summary" should be present and non-empty string.
message: null
recommended: true
severity: hint
formats:
  - Arazzo 1.0.x
functions:
  - truthy
properties:
  - summary
given: '$.workflows[*]'
definition: |-
  arazzo-workflow-summary:
    description: Workflow "summary" should be present and non-empty string.
    severity: hint
    given: '$.workflows[*]'
    then:
      field: summary
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/arazzo-rules/#arazzo-workflow-summary'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
In order to improve consumer experience, Workflow `summary` should be present and a non-empty string.

**Recommend:** Yes
{% endraw %}
