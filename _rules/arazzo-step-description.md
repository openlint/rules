---
layout: rule
title: arazzo-step-description
permalink: /arazzo-step-description/
summary: Step "description" should be present and non-empty string.
slug: arazzo-step-description
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Step "description" should be present and non-empty string.
message: null
recommended: true
severity: warn
formats:
  - Arazzo 1.0.x
functions:
  - truthy
properties:
  - description
given: '$.workflows[*].steps[*]'
definition: |-
  arazzo-step-description:
    description: Step "description" should be present and non-empty string.
    severity: warn
    given: '$.workflows[*].steps[*]'
    then:
      field: description
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/arazzo-rules/#arazzo-step-description'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
In order to improve consumer experience, Step `description` should be present and a non-empty string.

**Recommend:** Yes
{% endraw %}
