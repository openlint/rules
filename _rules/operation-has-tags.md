---
layout: rule
title: operation-has-tags
permalink: /operation-has-tags/
summary: Every operation is tagged.
slug: operation-has-tags
source: specification
ruleset: null
rulesetName: OpenLint Ruleset Specification
description: Every operation is tagged.
message: null
recommended: true
severity: hint
formats:
  - OpenAPI 3.x
specs:
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - defined
properties:
  - tags
given: '#Operation'
definition: |-
  aliases:
    Operation:
      - '$.paths[*][''get'',''put'',''post'',''delete'']'
  rules:
    operation-has-tags:
      description: Every operation is tagged.
      severity: hint
      given: '#Operation'
      then:
        field: tags
        function: defined
links:
  - name: OpenLint Ruleset Specification
    url: 'https://spec.openlint.org/v1/draft/#walkthrough'
---

{% raw %}
From the specification's running example. `#Operation` is an alias the example ruleset declares; copy the `aliases` block with the rule.

{% endraw %}
