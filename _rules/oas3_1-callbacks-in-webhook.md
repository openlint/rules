---
layout: rule
title: oas3_1-callbacks-in-webhook
permalink: /oas3_1-callbacks-in-webhook/
summary: ''
slug: oas3_1-callbacks-in-webhook
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: ''
message: Callbacks should not be defined in a webhook.
recommended: true
severity: warn
formats:
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
functions:
  - undefined
properties:
  - callbacks
given:
  - '$.webhooks[*][*].callbacks'
definition: |-
  oas3_1-callbacks-in-webhook:
    message: Callbacks should not be defined in a webhook.
    recommended: true
    formats:
      - OpenAPI 3.1.x
      - OpenAPI 3.2.x
    given:
      - '$.webhooks[*][*].callbacks'
    then:
      function: undefined
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas3_1-callbacks-in-webhook
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Callbacks should not be defined in a webhook. Applies to OpenAPI v3.1 and v3.2.

**Bad Example**

```yaml
webhooks:
  newPet:
    post:
      callbacks: ...
```
{% endraw %}
