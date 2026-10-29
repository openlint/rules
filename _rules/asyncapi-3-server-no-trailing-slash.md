---
layout: rule
title: asyncapi-3-server-no-trailing-slash
permalink: /asyncapi-3-server-no-trailing-slash/
summary: Server host must not end with slash.
slug: asyncapi-3-server-no-trailing-slash
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Server host must not end with slash.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 3.x
functions:
  - pattern
properties:
  - host
given: $.servers.*.host
definition: |-
  asyncapi-3-server-no-trailing-slash:
    description: Server host must not end with slash.
    recommended: true
    formats:
      - AsyncAPI 3.x
    given: $.servers.*.host
    then:
      function: pattern
      functionOptions:
        notMatch: /$
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-server-no-trailing-slash
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Server host should not have a trailing slash.

Some tooling forgets to strip trailing slashes off when it's joining the `servers.host` with `channels`, and you can get awkward URLs like `mqtt://example.com//pets`. Best to just strip them off yourself.

**Good Example**

```yaml
servers:
  - host: mqtt://example.com
```

**Bad Example**

```yaml
servers:
  - host: mqtt://example.com/
  - host: mqtt://example.com/broker/
```
{% endraw %}
