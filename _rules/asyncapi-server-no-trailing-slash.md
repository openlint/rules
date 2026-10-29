---
layout: rule
title: asyncapi-server-no-trailing-slash
permalink: /asyncapi-server-no-trailing-slash/
summary: Server URL must not end with slash.
slug: asyncapi-server-no-trailing-slash
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Server URL must not end with slash.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
functions:
  - pattern
properties:
  - url
given: '$.servers[*].url'
definition: |-
  asyncapi-server-no-trailing-slash:
    description: Server URL must not end with slash.
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: '$.servers[*].url'
    then:
      function: pattern
      functionOptions:
        notMatch: /$
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-server-no-trailing-slash
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Server URL should not have a trailing slash.

Some tooling forgets to strip trailing slashes off when it's joining the `servers.url` with `channels`, and you can get awkward URLs like `mqtt://example.com/broker//pets`. Best to just strip them off yourself.

**Good Example**

```yaml
servers:
  - url: mqtt://example.com
  - url: mqtt://example.com/broker
```

**Bad Example**

```yaml
servers:
  - url: mqtt://example.com/
  - url: mqtt://example.com/broker/
```
{% endraw %}
