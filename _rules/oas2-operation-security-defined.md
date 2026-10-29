---
layout: rule
title: oas2-operation-security-defined
permalink: /oas2-operation-security-defined/
summary: >-
  Operation "security" values must match a scheme defined in the
  "securityDefinitions" object.
slug: oas2-operation-security-defined
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: >-
  Operation "security" values must match a scheme defined in the
  "securityDefinitions" object.
message: '{{error}}'
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
functions:
  - oasSecurityDefined
properties:
  - security
given: '#SecurityRequirementObject'
definition: |-
  oas2-operation-security-defined:
    description: >-
      Operation "security" values must match a scheme defined in the
      "securityDefinitions" object.
    message: '{{error}}'
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given: '#SecurityRequirementObject'
    then:
      function: oasSecurityDefined
      functionOptions:
        oasVersion: 2
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas2-operation-security-defined
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Operation `security` values must match a scheme defined in the `securityDefinitions` object.
Ignores empty `security` values for cases where authentication is explicitly not required or optional.
{% endraw %}
