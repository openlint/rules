---
layout: rule
title: oas3-unused-component
permalink: /oas3-unused-component/
summary: ''
slug: oas3-unused-component
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: ''
message: Potentially unused component has been detected.
recommended: true
severity: warn
formats:
  - OpenAPI 3.x
functions:
  - oasUnusedComponent
properties:
  - components
given: $
definition: |-
  oas3-unused-component:
    message: Potentially unused component has been detected.
    recommended: true
    formats:
      - OpenAPI 3.x
    given: $
    resolved: false
    then:
      function: oasUnusedComponent
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#oas3-unused-component'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Potential unused reusable `components` entry has been detected.

<!-- theme: warning -->

> #### Warning
>
> This rule may identify false positives when linting a specification
> that acts as a library (a container storing reusable objects, leveraged by other
> specifications that reference those objects).
{% endraw %}
