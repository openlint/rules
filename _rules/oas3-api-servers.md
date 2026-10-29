---
layout: rule
title: oas3-api-servers
permalink: /oas3-api-servers/
summary: OpenAPI "servers" must be present and non-empty array.
slug: oas3-api-servers
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: OpenAPI "servers" must be present and non-empty array.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 3.x
specs:
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - schema
properties:
  - servers
given: $
definition: |-
  oas3-api-servers:
    description: OpenAPI "servers" must be present and non-empty array.
    recommended: true
    formats:
      - OpenAPI 3.x
    given: $
    then:
      field: servers
      function: schema
      functionOptions:
        dialect: draft7
        schema:
          items:
            type: object
          minItems: 1
          type: array
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#oas3-api-servers'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
OpenAPI `servers` must be present and non-empty array.

Share links to any servers that people might care about. If this is going to be given to internal people then usually that is localhost (so they know the right port number), staging, and production.

```yaml
servers:
  - url: https://example.com/api
    description: Production server
  - url: https://staging.example.com/api
    description: Staging server
  - url: http://localhost:3001
    description: Development server
```

If this is going out to the world, maybe have production and a general sandbox people can play with.
{% endraw %}
