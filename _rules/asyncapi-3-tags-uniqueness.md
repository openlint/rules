---
layout: rule
title: asyncapi-3-tags-uniqueness
permalink: /asyncapi-3-tags-uniqueness/
summary: Each tag must have a unique name.
slug: asyncapi-3-tags-uniqueness
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Each tag must have a unique name.
message: '{{error}}'
recommended: true
severity: error
formats:
  - AsyncAPI 3.x
specs:
  - AsyncAPI 3.x
functions:
  - uniquenessTags
properties:
  - tags
given:
  - $.info.tags
  - $.servers.*.tags
  - $.components.servers.*.tags
  - $.operations.*.tags
  - $.components.operations.*.tags
  - $.operations.*.traits.*.tags
  - $.components.operations.traits.*.tags
  - $.components.operationTraits.*.tags
  - $.channels.*.messages.*.tags
  - $.components.channels.*.messages.tags
  - $.components.messages.*.tags
  - $.channels.*..messages.*.traits.*.tags
  - $.components.channels.*.messages.*.traits.*.tags
  - $.components.messages.*.traits.*.tags
  - $.components.messageTraits.*.tags
definition: |-
  asyncapi-3-tags-uniqueness:
    description: Each tag must have a unique name.
    message: '{{error}}'
    severity: error
    recommended: true
    formats:
      - AsyncAPI 3.x
    given:
      - $.info.tags
      - $.servers.*.tags
      - $.components.servers.*.tags
      - $.operations.*.tags
      - $.components.operations.*.tags
      - $.operations.*.traits.*.tags
      - $.components.operations.traits.*.tags
      - $.components.operationTraits.*.tags
      - $.channels.*.messages.*.tags
      - $.components.channels.*.messages.tags
      - $.components.messages.*.tags
      - $.channels.*..messages.*.traits.*.tags
      - $.components.channels.*.messages.*.traits.*.tags
      - $.components.messages.*.traits.*.tags
      - $.components.messageTraits.*.tags
    then:
      function: uniquenessTags
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-tags-uniqueness
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Tags must not have duplicate names (identifiers).

**Bad Example**

```yaml
info:
  tags:
    - name: "Badger"
    - name: "Badger"
```

**Good Example**

```yaml
info:
  tags:
    - name: "Aardvark"
    - name: "Badger"
```
{% endraw %}
