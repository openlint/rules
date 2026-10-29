---
layout: rule
title: asyncapi-unused-components-server
permalink: /asyncapi-unused-components-server/
summary: Potentially unused components server has been detected.
slug: asyncapi-unused-components-server
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Potentially unused components server has been detected.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
functions:
  - unreferencedReusableObject
properties:
  - servers
given: $.components.servers
definition: |-
  asyncapi-unused-components-server:
    description: Potentially unused components server has been detected.
    recommended: true
    formats:
      - AsyncAPI 2.x
      - AsyncAPI 3.x
    given: $.components.servers
    resolved: false
    then:
      function: unreferencedReusableObject
      functionOptions:
        reusableObjectsLocation: '#/components/servers'
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-unused-components-server
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Potential unused reusable `server` entry has been detected.

<!-- theme: warning -->

_Warning:_ This rule may identify false positives when linting a specification
that acts as a library (a container storing reusable objects, leveraged by other
specifications that reference those objects).
{% endraw %}
