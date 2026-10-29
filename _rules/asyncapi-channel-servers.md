---
layout: rule
title: asyncapi-channel-servers
permalink: /asyncapi-channel-servers/
summary: Channel servers must be defined in the "servers" object.
slug: asyncapi-channel-servers
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Channel servers must be defined in the "servers" object.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - asyncApi2ChannelServers
properties:
  - servers
given: $
definition: |-
  asyncapi-channel-servers:
    description: Channel servers must be defined in the "servers" object.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: $
    then:
      function: asyncApi2ChannelServers
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-channel-servers
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Channel servers must be defined in the `servers` object.

**Bad Example**

```yaml
asyncapi: "2.0.0"
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
      - development
```

**Good Example**

```yaml
asyncapi: "2.0.0"
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
      - production
```
{% endraw %}
