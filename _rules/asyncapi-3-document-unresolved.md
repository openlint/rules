---
layout: rule
title: asyncapi-3-document-unresolved
permalink: /asyncapi-3-document-unresolved/
summary: >-
  Checking if the AsyncAPI v3 document has valid structure before resolving
  references.
slug: asyncapi-3-document-unresolved
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: >-
  Checking if the AsyncAPI v3 document has valid structure before resolving
  references.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 3.x
specs:
  - AsyncAPI 3.x
functions:
  - function
properties:
  - document
given: $
definition: |-
  asyncapi-3-document-unresolved:
    description: >-
      Checking if the AsyncAPI v3 document has valid structure before resolving
      references.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 3.x
    given: $
    resolved: false
    then:
      function: function
      functionOptions:
        resolved: false
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-document-unresolved
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Validate structure of AsyncAPI specification before references have been resolved.
{% endraw %}
