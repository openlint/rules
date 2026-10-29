---
layout: rule
title: asyncapi-3-channel-servers
permalink: /asyncapi-3-channel-servers/
summary: Channel servers must be defined in the "servers" object.
slug: asyncapi-3-channel-servers
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Channel servers must be defined in the "servers" object.
message: null
recommended: true
severity: error
formats:
  - AsyncAPI 3.x
functions:
  - pattern
properties:
  - $ref
given: $.channels.*
definition: |-
  asyncapi-3-channel-servers:
    description: Channel servers must be defined in the "servers" object.
    severity: error
    recommended: true
    formats:
      - AsyncAPI 3.x
    given: $.channels.*
    resolved: false
    then:
      field: $.servers.*.$ref
      function: pattern
      functionOptions:
        match: '#\/servers\/'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-channel-servers
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Channel servers must be defined in the `servers` object.

**Bad Example**

```yaml
asyncapi: "3.1.0"
info:
  title: Awesome API
  description: A very well-defined API
  version: "1.0"
servers:
  production:
    url: "stoplight.io"
    protocol: "https"
channels:
  hello:
    servers:
      - $ref: #/servers/development
```

**Good Example**

```yaml
asyncapi: "3.1.0"
info:
  title: Awesome API
  description: A very well-defined API
  version: "1.0"
servers:
  production:
    url: "stoplight.io"
    protocol: "https"
channels:
  hello:
    servers:
      - $ref: #/servers/production
```
{% endraw %}
