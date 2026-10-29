---
layout: rule
title: oas3_1-servers-in-webhook
permalink: /oas3_1-servers-in-webhook/
summary: ''
slug: oas3_1-servers-in-webhook
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: ''
message: Servers should not be defined in a webhook.
recommended: true
severity: warn
formats:
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
specs:
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - undefined
properties:
  - servers
given:
  - $.webhooks.servers
  - '$.webhooks[*][*].servers'
definition: |-
  oas3_1-servers-in-webhook:
    message: Servers should not be defined in a webhook.
    recommended: true
    formats:
      - OpenAPI 3.1.x
      - OpenAPI 3.2.x
    given:
      - $.webhooks.servers
      - '$.webhooks[*][*].servers'
    then:
      function: undefined
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas3_1-servers-in-webhook
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Servers should not be defined in a webhook. Applies to OpenAPI v3.1 and v3.2.

**Bad Example**

At the path item object level:

```yaml
webhooks:
  servers:
    - url: https://example.com/
    - url: https://example.com/api/
```

or

At the operation level:

```yaml
webhooks:
  newPet:
    post:
      servers:
        -url: https://example.com/
```
{% endraw %}
