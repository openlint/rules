---
layout: rule
title: asyncapi-tags-uniqueness
permalink: /asyncapi-tags-uniqueness/
summary: Each tag must have a unique name.
slug: asyncapi-tags-uniqueness
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Each tag must have a unique name.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 2.x
functions:
  - uniquenessTags
properties:
  - tags
given:
  - $.tags
  - $.servers.*.tags
  - $.components.servers.*.tags
  - '$.channels.*.[publish,subscribe].tags'
  - '$.components.channels.*.[publish,subscribe].tags'
  - '$.channels.*.[publish,subscribe].traits.*.tags'
  - '$.components.channels.*.[publish,subscribe].traits.*.tags'
  - $.components.operationTraits.*.tags
  - '$.channels.*.[publish,subscribe].message.tags'
  - '$.channels.*.[publish,subscribe].message.oneOf.*.tags'
  - '$.components.channels.*.[publish,subscribe].message.tags'
  - '$.components.channels.*.[publish,subscribe].message.oneOf.*.tags'
  - $.components.messages.*.tags
  - '$.channels.*.[publish,subscribe].message.traits.*.tags'
  - '$.channels.*.[publish,subscribe].message.oneOf.*.traits.*.tags'
  - '$.components.channels.*.[publish,subscribe].message.traits.*.tags'
  - '$.components.channels.*.[publish,subscribe].message.oneOf.*.traits.*.tags'
  - $.components.messages.*.traits.*.tags
  - $.components.messageTraits.*.tags
definition: |-
  asyncapi-tags-uniqueness:
    description: Each tag must have a unique name.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 2.x
    given:
      - $.tags
      - $.servers.*.tags
      - $.components.servers.*.tags
      - '$.channels.*.[publish,subscribe].tags'
      - '$.components.channels.*.[publish,subscribe].tags'
      - '$.channels.*.[publish,subscribe].traits.*.tags'
      - '$.components.channels.*.[publish,subscribe].traits.*.tags'
      - $.components.operationTraits.*.tags
      - '$.channels.*.[publish,subscribe].message.tags'
      - '$.channels.*.[publish,subscribe].message.oneOf.*.tags'
      - '$.components.channels.*.[publish,subscribe].message.tags'
      - '$.components.channels.*.[publish,subscribe].message.oneOf.*.tags'
      - $.components.messages.*.tags
      - '$.channels.*.[publish,subscribe].message.traits.*.tags'
      - '$.channels.*.[publish,subscribe].message.oneOf.*.traits.*.tags'
      - '$.components.channels.*.[publish,subscribe].message.traits.*.tags'
      - '$.components.channels.*.[publish,subscribe].message.oneOf.*.traits.*.tags'
      - $.components.messages.*.traits.*.tags
      - $.components.messageTraits.*.tags
    then:
      function: uniquenessTags
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-tags-uniqueness
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Tags must not have duplicate names (identifiers).

**Bad Example**

```yaml
tags:
  - name: "Badger"
  - name: "Badger"
```

**Good Example**

```yaml
tags:
  - name: "Aardvark"
  - name: "Badger"
```
{% endraw %}
