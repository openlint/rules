---
layout: rule
title: operation-operationId-valid-in-url
permalink: /operation-operationId-valid-in-url/
summary: ''
slug: operation-operationId-valid-in-url
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: ''
message: operationId must not contain characters that are invalid when used in URL.
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
functions:
  - pattern
properties:
  - operationId
given: '#OperationObject'
definition: |-
  operation-operationId-valid-in-url:
    message: operationId must not contain characters that are invalid when used in URL.
    recommended: true
    given: '#OperationObject'
    then:
      field: operationId
      function: pattern
      functionOptions:
        match: '^[A-Za-z0-9-._~:/?#\[\]@!\$&''()*+,;=]*$'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#operation-operationId-valid-in-url
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Seeing as operationId is often used for unique URLs in documentation systems, it's a good idea to avoid non-URL-safe characters.

**Bad Example**

```yaml
paths:
  /pets:
    get:
      operationId: get cats
```
{% endraw %}
