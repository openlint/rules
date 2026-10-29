---
layout: rule
title: asyncapi-server-security
permalink: /asyncapi-server-security/
summary: Server have to reference a defined security schemes.
slug: asyncapi-server-security
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Server have to reference a defined security schemes.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
functions:
  - asyncApiSecurity
properties:
  - security
given: $.servers.*.security.*
definition: |-
  asyncapi-server-security:
    description: Server have to reference a defined security schemes.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: $.servers.*.security.*
    then:
      function: asyncApiSecurity
      functionOptions:
        objectType: Server
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-server-security
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Server `security` values must match a scheme defined in the `components.securitySchemes` object. It also checks if there are `oauth2` scopes that have been defined for the given security.

**Good Example**

```yaml
asyncapi: 2.0.0
servers:
  production:
    url: test.mosquitto.org
    security:
      - petstore_auth: []
components:
  securitySchemes:
    petstore_auth: ...
```

**Bad Example**

```yaml
asyncapi: 2.0.0
servers:
  production:
    url: test.mosquitto.org
    security:
      - not_defined: []
components:
  securitySchemes:
    petstore_auth: ...
```
{% endraw %}
