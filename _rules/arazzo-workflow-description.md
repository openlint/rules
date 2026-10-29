---
layout: rule
title: arazzo-workflow-description
permalink: /arazzo-workflow-description/
summary: Workflow "description" should be present and non-empty string.
slug: arazzo-workflow-description
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Workflow "description" should be present and non-empty string.
message: null
recommended: true
severity: warn
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - truthy
properties:
  - description
given: '$.workflows[*]'
definition: |-
  arazzo-workflow-description:
    description: Workflow "description" should be present and non-empty string.
    severity: warn
    given: '$.workflows[*]'
    then:
      field: description
      function: truthy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-workflow-description
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
In order to improve consumer experience, Workflow `description` should be present and a non-empty string.

**Recommend:** Yes
{% endraw %}
