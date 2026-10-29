---
layout: rule
title: operation-operationId
permalink: /operation-operationId/
summary: Operation must have "operationId".
slug: operation-operationId
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Operation must have "operationId".
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
  - truthy
properties:
  - operationId
given: '#OperationObject'
definition: |-
  operation-operationId:
    description: Operation must have "operationId".
    recommended: true
    given: '#OperationObject'
    then:
      field: operationId
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#operation-operationId'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
This operation ID is essentially a reference for the operation, which can be used to visually suggest a connection to other operations. This is like some theoretical static HATEOAS-style referencing, but it's also used for the URL in some documentation systems.

Make the value `lower-hyphen-case`, and try and think of a name for the action which does not relate to the HTTP message. Base it off the actual action being performed. `create-polygon`? `search-by-polygon`? `filter-companies`?
{% endraw %}
