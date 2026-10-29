---
layout: rule
title: oas2-valid-media-example
permalink: /oas2-valid-media-example/
summary: Examples must be valid against their defined schema.
slug: oas2-valid-media-example
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Examples must be valid against their defined schema.
message: '{{error}}'
recommended: true
severity: error
formats:
  - OpenAPI 2.0 (Swagger)
functions:
  - oasExample
properties:
  - schema
given: '$..responses..[?(@ && @.schema && @.examples)]'
definition: |-
  oas2-valid-media-example:
    description: Examples must be valid against their defined schema.
    message: '{{error}}'
    severity: 0
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given: '$..responses..[?(@ && @.schema && @.examples)]'
    then:
      function: oasExample
      functionOptions:
        schemaField: schema
        oasVersion: 2
        type: media
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas2-valid-media-example
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Examples must be valid against their defined schema. Common reasons you may see errors are:

- The value used for property examples is not the same type indicated in the schema (`string` vs. `integer`, for example).
- Examples contain properties not included in the schema.

For example, if you have a Pet object with an `id` property as type `integer`, and `name` and `petType` properties as type `string`, the `examples` properties type should match the schema:

```yaml
schemas:
  Pet:
    title: Pet
    type: object
    properties:
      id:
        type: integer
      name:
        type: string
      petType:
        type: string
    required:
      - id
      - name
      - petType
```

**Good Example**

```yaml
paths:
  '/pet/{petId}':
    get:
      ...
      responses:
        '200':
          description: Pet Found
          schema:
            $ref: '#/definitions/Pet'
          examples:
            Get Pet Bubbles:
              id: 123
              name: 'Bubbles'
              petType: 'dog'
```

**Bad Example**

This would throw an error since `petType` is an `integer`, not a `string`.

```yaml
paths:
  '/pet/{petId}':
    get:
      ...
      responses:
        '200':
          description: Pet Found
          schema:
            $ref: '#/definitions/Pet'
          examples:
            Get Pet Bubbles:
              id: 123
              name: 'Bubbles'
              petType: 123
```
{% endraw %}
