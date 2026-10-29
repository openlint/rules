---
layout: rule
title: arazzo-document-schema
permalink: /arazzo-document-schema/
summary: Arazzo Document must be valid against the Arazzo schema.
slug: arazzo-document-schema
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Arazzo Document must be valid against the Arazzo schema.
message: '{{error}}'
recommended: true
severity: error
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - arazzoDocumentSchema
properties:
  - document
given: $
definition: |-
  arazzo-document-schema:
    description: Arazzo Document must be valid against the Arazzo schema.
    message: '{{error}}'
    severity: 0
    given: $
    then:
      function: arazzoDocumentSchema
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/arazzo-rules/#arazzo-document-schema'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Validate structure of an Arazzo Document against the schema of the Arazzo v1 specification.
{% endraw %}
