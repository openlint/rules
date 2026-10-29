---
layout: rule
title: operation-tag-defined
permalink: /operation-tag-defined/
summary: Operation tags must be defined in global tags.
slug: operation-tag-defined
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Operation tags must be defined in global tags.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
specs:
  - OpenAPI 2.0
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - oasTagDefined
properties:
  - tags
given: $
definition: |-
  operation-tag-defined:
    description: Operation tags must be defined in global tags.
    recommended: true
    given: $
    then:
      function: oasTagDefined
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#operation-tag-defined'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Operation tags should be defined in global tags.
{% endraw %}
