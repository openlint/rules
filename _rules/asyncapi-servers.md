---
layout: rule
title: asyncapi-servers
permalink: /asyncapi-servers/
summary: AsyncAPI object must have non-empty "servers" object.
slug: asyncapi-servers
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: AsyncAPI object must have non-empty "servers" object.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
specs:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
functions:
  - schema
properties:
  - servers
given: $
definition: |-
  asyncapi-servers:
    description: AsyncAPI object must have non-empty "servers" object.
    recommended: true
    formats:
      - AsyncAPI 2.x
      - AsyncAPI 3.x
    given: $
    then:
      field: servers
      function: schema
      functionOptions:
        schema:
          type: object
          minProperties: 1
        allErrors: true
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-servers'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
A non-empty `servers` object is expected to be located at the root of the document.
{% endraw %}
