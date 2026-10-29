---
layout: rule
title: oas3-valid-schema-example
permalink: /oas3-valid-schema-example/
summary: Examples must be valid against their defined schema.
slug: oas3-valid-schema-example
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Examples must be valid against their defined schema.
message: '{{error}}'
recommended: true
severity: error
formats:
  - OpenAPI 3.x
specs:
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - oasExample
properties:
  - example
given:
  - >-
    $.components.schemas..[?(@property !== 'properties' && @ && (@ && @.example
    !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format ||
    @.$ref || @.properties || @.items))]
  - >-
    $..content..[?(@property !== 'properties' && @ && (@ && @.example !== void 0
    || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref ||
    @.properties || @.items))]
  - >-
    $..headers..[?(@property !== 'properties' && @ && (@ && @.example !== void 0
    || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref ||
    @.properties || @.items))]
  - >-
    $..parameters..[?(@property !== 'properties' && @ && (@ && @.example !==
    void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref
    || @.properties || @.items))]
definition: |-
  oas3-valid-schema-example:
    description: Examples must be valid against their defined schema.
    message: '{{error}}'
    severity: 0
    recommended: true
    formats:
      - OpenAPI 3.x
    given:
      - >-
        $.components.schemas..[?(@property !== 'properties' && @ && (@ &&
        @.example !== void 0 || @.default !== void 0) && (@.enum || @.type ||
        @.format || @.$ref || @.properties || @.items))]
      - >-
        $..content..[?(@property !== 'properties' && @ && (@ && @.example !== void
        0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref ||
        @.properties || @.items))]
      - >-
        $..headers..[?(@property !== 'properties' && @ && (@ && @.example !== void
        0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref ||
        @.properties || @.items))]
      - >-
        $..parameters..[?(@property !== 'properties' && @ && (@ && @.example !==
        void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref
        || @.properties || @.items))]
    then:
      function: oasExample
      functionOptions:
        schemaField: $
        oasVersion: 3
        type: schema
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas3-valid-schema-example
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Examples must be valid against their defined schema. This rule is applied to Schema objects.

**Good Example**

```yaml
schemas:
  Pet:
    title: Pet
    type: object
    properties:
      id:
        type: integer
        example: 123
      name:
        type: string
        example: Bubbles
      petType:
        type: string
        example: dog
    required:
      - id
      - name
      - petType
```

**Bad Example**

This would throw an error since the example value for `petType` is an `integer`, not a `string`.

```yaml
schemas:
  Pet:
    title: Pet
    type: object
    properties:
      id:
        type: integer
        example: 123
      name:
        type: string
        example: Bubbles
      petType:
        type: string
        example: 123
    required:
      - name
      - petType
```
{% endraw %}
