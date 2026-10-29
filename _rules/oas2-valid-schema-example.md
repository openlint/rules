---
layout: rule
title: oas2-valid-schema-example
permalink: /oas2-valid-schema-example/
summary: Examples must be valid against their defined schema.
slug: oas2-valid-schema-example
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Examples must be valid against their defined schema.
message: '{{error}}'
recommended: true
severity: error
formats:
  - OpenAPI 2.0 (Swagger)
specs:
  - OpenAPI 2.0
functions:
  - oasExample
properties:
  - items
given:
  - >-
    $..definitions..[?(@property !== 'properties' && @ && (@.example !== void 0
    || @['x-example'] !== void 0 || @.default !== void 0) && (@.enum || @.type
    || @.format || @.$ref || @.properties || @.items))]
  - >-
    $..parameters..[?(@property !== 'properties' && @ && (@.example !== void 0
    || @['x-example'] !== void 0 || @.default !== void 0) && (@.enum || @.type
    || @.format || @.$ref || @.properties || @.items))]
  - >-
    $..responses..[?(@property !== 'properties' && @ && (@.example !== void 0 ||
    @['x-example'] !== void 0 || @.default !== void 0) && (@.enum || @.type ||
    @.format || @.$ref || @.properties || @.items))]
definition: |-
  oas2-valid-schema-example:
    description: Examples must be valid against their defined schema.
    message: '{{error}}'
    severity: 0
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given:
      - >-
        $..definitions..[?(@property !== 'properties' && @ && (@.example !== void
        0 || @['x-example'] !== void 0 || @.default !== void 0) && (@.enum ||
        @.type || @.format || @.$ref || @.properties || @.items))]
      - >-
        $..parameters..[?(@property !== 'properties' && @ && (@.example !== void 0
        || @['x-example'] !== void 0 || @.default !== void 0) && (@.enum || @.type
        || @.format || @.$ref || @.properties || @.items))]
      - >-
        $..responses..[?(@property !== 'properties' && @ && (@.example !== void 0
        || @['x-example'] !== void 0 || @.default !== void 0) && (@.enum || @.type
        || @.format || @.$ref || @.properties || @.items))]
    then:
      function: oasExample
      functionOptions:
        schemaField: $
        oasVersion: 2
        type: schema
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas2-valid-schema-example
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Examples must be valid against their defined schema.
{% endraw %}
