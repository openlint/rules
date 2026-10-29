---
layout: rule
title: oas3-server-not-example.com
permalink: /oas3-server-not-example.com/
summary: Server URL must not point at example.com.
slug: oas3-server-not-example.com
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Server URL must not point at example.com.
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
  - pattern
properties:
  - url
given: '$.servers[*].url'
definition: |-
  oas3-server-not-example.com:
    description: Server URL must not point at example.com.
    recommended: false
    formats:
      - OpenAPI 3.x
    given: '$.servers[*].url'
    then:
      function: pattern
      functionOptions:
        notMatch: example\.com
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas3-server-not-example.com
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Server URL should not point to example.com.

**Bad Example**

```yaml
servers:
  - url: https://example.com/api
    description: Production server
  - url: https://staging.example.com/api
    description: Staging server
  - url: http://localhost:3001
    description: Development server
```

We have example.com for documentation purposes here, but you should put in actual domains.
{% endraw %}
