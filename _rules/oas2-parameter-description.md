---
layout: rule
title: oas2-parameter-description
permalink: /oas2-parameter-description/
summary: Parameter objects must have "description".
slug: oas2-parameter-description
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Parameter objects must have "description".
message: null
recommended: false
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
functions:
  - truthy
properties:
  - description
given: '$..parameters[?(@ && @.in)]'
definition: |-
  oas2-parameter-description:
    description: Parameter objects must have "description".
    recommended: false
    formats:
      - OpenAPI 2.0 (Swagger)
    given: '$..parameters[?(@ && @.in)]'
    then:
      field: description
      function: truthy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas2-parameter-description
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Parameter objects should have a `description`.
{% endraw %}
