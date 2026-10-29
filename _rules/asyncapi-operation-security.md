---
layout: rule
title: asyncapi-operation-security
permalink: /asyncapi-operation-security/
summary: Operation have to reference a defined security schemes.
slug: asyncapi-operation-security
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Operation have to reference a defined security schemes.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
functions:
  - asyncApiSecurity
properties:
  - security
given: '$.channels[*][publish,subscribe].security.*'
definition: |-
  asyncapi-operation-security:
    description: Operation have to reference a defined security schemes.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: '$.channels[*][publish,subscribe].security.*'
    then:
      function: asyncApiSecurity
      functionOptions:
        objectType: Operation
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-operation-security
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Operation `security` values must match a scheme defined in the `components.securitySchemes` object. It also checks if there are `oauth2` scopes that have been defined for the given security.

**Good Example**

```yaml
channels:
  "user/signup":
    publish:
      security:
        - petstore_auth: []
components:
  securitySchemes:
    petstore_auth: ...
```

**Bad Example**

```yaml
channels:
  "user/signup":
    publish:
      security:
        - not_defined: []
components:
  securitySchemes:
    petstore_auth: ...
```
{% endraw %}
