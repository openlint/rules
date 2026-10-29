---
layout: rule
title: asyncapi-tags-alphabetical
permalink: /asyncapi-tags-alphabetical/
summary: AsyncAPI object must have alphabetical "tags".
slug: asyncapi-tags-alphabetical
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: AsyncAPI object must have alphabetical "tags".
message: null
recommended: false
severity: warn
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - alphabetical
properties:
  - tags
given: $
definition: |-
  asyncapi-tags-alphabetical:
    description: AsyncAPI object must have alphabetical "tags".
    recommended: false
    formats:
      - AsyncAPI 2.x
    given: $
    then:
      field: tags
      function: alphabetical
      functionOptions:
        keyedBy: name
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-tags-alphabetical
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
AsyncAPI object should have alphabetical `tags`. This will be sorted by the `name` property.

**Bad Example**

```yaml
tags:
  - name: "Badger"
  - name: "Aardvark"
```

**Good Example**

```yaml
tags:
  - name: "Aardvark"
  - name: "Badger"
```
{% endraw %}
