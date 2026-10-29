---
layout: rule
title: operation-id-camel-case
permalink: /operation-id-camel-case/
summary: operationId is written in camelCase.
slug: operation-id-camel-case
source: specification
ruleset: null
rulesetName: OpenLint Ruleset Specification
description: operationId is written in camelCase.
message: null
recommended: false
severity: warn
formats:
  - OpenAPI 3.x
specs:
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - casing
properties:
  - operationId
given: >-
  $.paths[*]['get','put','post','delete','options','head','patch','trace'].operationId
definition: |-
  aliases:
    Operation:
      - '$.paths[*][''get'',''put'',''post'',''delete'']'
  rules:
    operation-id-camel-case:
      description: operationId is written in camelCase.
      recommended: false
      given: >-
        $.paths[*]['get','put','post','delete','options','head','patch','trace'].operationId
      then:
        function: casing
        functionOptions:
          type: camel
links:
  - name: OpenLint Ruleset Specification
    url: 'https://spec.openlint.org/v1/draft/#walkthrough'
---

{% raw %}
From the specification's running example. It is defined with `recommended: false`, so it is off until a ruleset turns it on with the shorthand `operation-id-camel-case: true`.

{% endraw %}
