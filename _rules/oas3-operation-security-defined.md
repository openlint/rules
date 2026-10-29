---
layout: rule
title: oas3-operation-security-defined
permalink: /oas3-operation-security-defined/
summary: >-
  Operation "security" values must match a scheme defined in the
  "components.securitySchemes" object.
slug: oas3-operation-security-defined
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: >-
  Operation "security" values must match a scheme defined in the
  "components.securitySchemes" object.
message: '{{error}}'
recommended: true
severity: warn
formats:
  - OpenAPI 3.x
functions:
  - oasSecurityDefined
properties:
  - security
given: '#SecurityRequirementObject'
definition: |-
  oas3-operation-security-defined:
    description: >-
      Operation "security" values must match a scheme defined in the
      "components.securitySchemes" object.
    message: '{{error}}'
    recommended: true
    formats:
      - OpenAPI 3.x
    given: '#SecurityRequirementObject'
    then:
      function: oasSecurityDefined
      functionOptions:
        oasVersion: 3
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas3-operation-security-defined
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Operation `security` values must match a scheme defined in the `components.securitySchemes` object.
{% endraw %}
