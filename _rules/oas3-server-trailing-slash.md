---
layout: rule
title: oas3-server-trailing-slash
permalink: /oas3-server-trailing-slash/
summary: Server URL must not have trailing slash.
slug: oas3-server-trailing-slash
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Server URL must not have trailing slash.
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
  - pattern
properties:
  - url
given: '$.servers[*].url'
definition: |-
  oas3-server-trailing-slash:
    description: Server URL must not have trailing slash.
    recommended: true
    formats:
      - OpenAPI 3.x
    given: '$.servers[*].url'
    then:
      function: pattern
      functionOptions:
        notMatch: ./$
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas3-server-trailing-slash
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Server URL should not have a trailing slash.

Some tooling forgets to strip trailing slashes off when it's joining the `servers.url` with `paths`, and you can get awkward URLs like `https://example.com/api//pets`. Best to just strip them off yourself.

**Good Example**

```yaml
servers:
  - url: https://example.com
  - url: https://example.com/api
```

**Bad Example**

```yaml
servers:
  - url: https://example.com/
  - url: https://example.com/api/
```
{% endraw %}
