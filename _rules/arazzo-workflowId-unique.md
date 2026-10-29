---
layout: rule
title: arazzo-workflowId-unique
permalink: /arazzo-workflowId-unique/
summary: Every workflow must have unique "workflowId".
slug: arazzo-workflowId-unique
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Every workflow must have unique "workflowId".
message: '{{error}}'
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - arazzoWorkflowIdUniqueness
properties:
  - workflowId
given: $
definition: |-
  arazzo-workflowId-unique:
    description: Every workflow must have unique "workflowId".
    message: '{{error}}'
    severity: 0
    given: $
    then:
      function: arazzoWorkflowIdUniqueness
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/arazzo-rules/#arazzo-workflowId-unique'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
`workflowId` must be unique across all the workflows defined within an Arazzo Document.
{% endraw %}
