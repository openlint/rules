---
layout: rule
title: arazzo-source-descriptions-type
permalink: /arazzo-source-descriptions-type/
summary: Source Description "type" should be present.
slug: arazzo-source-descriptions-type
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Source Description "type" should be present.
message: null
recommended: true
severity: warn
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - truthy
properties:
  - type
given: '$.sourceDescriptions[*]'
definition: |-
  arazzo-source-descriptions-type:
    description: Source Description "type" should be present.
    severity: warn
    given: '$.sourceDescriptions[*]'
    then:
      field: type
      function: truthy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/arazzo-rules/#arazzo-source-descriptions-type
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Source Description `type` should be present. This means that tooling does not need to immediately parse/resolve the `sourceDescriptions` to know what type of document they are.

**Good Example**

```yaml
sourceDescriptions:
  - name: BnplApi
    url: https://raw.githubusercontent.com/OAI/Arazzo-Specification/main/examples/1.0.0/bnpl-openapi.yaml
    type: openapi
```
{% endraw %}
