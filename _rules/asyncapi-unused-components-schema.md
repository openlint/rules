---
layout: rule
title: asyncapi-unused-components-schema
permalink: /asyncapi-unused-components-schema/
summary: Potentially unused components schema has been detected.
slug: asyncapi-unused-components-schema
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Potentially unused components schema has been detected.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
functions:
  - unreferencedReusableObject
properties:
  - schemas
given: $.components.schemas
definition: |-
  asyncapi-unused-components-schema:
    description: Potentially unused components schema has been detected.
    recommended: true
    formats:
      - AsyncAPI 2.x
      - AsyncAPI 3.x
    given: $.components.schemas
    resolved: false
    then:
      function: unreferencedReusableObject
      functionOptions:
        reusableObjectsLocation: '#/components/schemas'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-unused-components-schema
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Potential unused reusable `schema` entry has been detected.

<!-- theme: warning -->

_Warning:_ This rule may identify false positives when linting a specification
that acts as a library (a container storing reusable objects, leveraged by other
specifications that reference those objects).
{% endraw %}
