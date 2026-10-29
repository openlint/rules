---
layout: rule
title: oas2-unused-definition
permalink: /oas2-unused-definition/
summary: Potentially unused definition has been detected.
slug: oas2-unused-definition
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Potentially unused definition has been detected.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
functions:
  - unreferencedReusableObject
properties:
  - definitions
given: $.definitions
definition: |-
  oas2-unused-definition:
    description: Potentially unused definition has been detected.
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given: $.definitions
    resolved: false
    then:
      function: unreferencedReusableObject
      functionOptions:
        reusableObjectsLocation: '#/definitions'
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#oas2-unused-definition'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Potential unused reusable `definition` entry has been detected.

<!-- theme: warning -->

> #### Warning
>
> This rule may identify false positives when linting a specification
> that acts as a library (a container storing reusable objects, leveraged by other
> specifications that reference those objects).
{% endraw %}
