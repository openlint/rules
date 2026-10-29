---
layout: rule
title: operation-success-response
permalink: /operation-success-response/
summary: Operation must have at least one "2xx" or "3xx" response.
slug: operation-success-response
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Operation must have at least one "2xx" or "3xx" response.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
functions:
  - oasOpSuccessResponse
properties:
  - responses
given: '#OperationObject'
definition: |-
  operation-success-response:
    description: Operation must have at least one "2xx" or "3xx" response.
    recommended: true
    given: '#OperationObject'
    then:
      field: responses
      function: oasOpSuccessResponse
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#operation-success-response
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Operation must have at least one `2xx` or `3xx` response. Any API operation (endpoint) can fail, but presumably, it is also meant to do something constructive at some point. If you forget to write out a success case for this API, then this rule will let you know.

**Bad Example**

```yaml
paths:
  /path:
    get:
      responses:
        418:
          description: teapot
```
{% endraw %}
