---
layout: rule
title: arazzo-info-summary
permalink: /arazzo-info-summary/
summary: Info "summary" is recommended be present and be a non-empty string.
slug: arazzo-info-summary
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Info "summary" is recommended be present and be a non-empty string.
message: null
recommended: true
severity: hint
formats:
  - Arazzo 1.0.x
functions:
  - truthy
properties:
  - summary
given: $
definition: |-
  arazzo-info-summary:
    description: Info "summary" is recommended be present and be a non-empty string.
    severity: hint
    given: $
    then:
      field: info.summary
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/arazzo-rules/#arazzo-info-summary'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

