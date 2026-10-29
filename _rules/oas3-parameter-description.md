---
layout: rule
title: oas3-parameter-description
permalink: /oas3-parameter-description/
summary: Parameter objects must have "description".
slug: oas3-parameter-description
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Parameter objects must have "description".
message: null
recommended: false
severity: warn
formats:
  - OpenAPI 3.x
specs:
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - truthy
properties:
  - description
given:
  - '#PathItem.parameters[?(@ && @.in)]'
  - '#OperationObject.parameters[?(@ && @.in)]'
  - '$.components.parameters[?(@ && @.in)]'
definition: |-
  oas3-parameter-description:
    description: Parameter objects must have "description".
    recommended: false
    formats:
      - OpenAPI 3.x
    given:
      - '#PathItem.parameters[?(@ && @.in)]'
      - '#OperationObject.parameters[?(@ && @.in)]'
      - '$.components.parameters[?(@ && @.in)]'
    then:
      field: description
      function: truthy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas3-parameter-description
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Parameter objects should have a `description`.
{% endraw %}
