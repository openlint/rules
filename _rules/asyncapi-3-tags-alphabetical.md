---
layout: rule
title: asyncapi-3-tags-alphabetical
permalink: /asyncapi-3-tags-alphabetical/
summary: AsyncAPI object must have alphabetical "tags".
slug: asyncapi-3-tags-alphabetical
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: AsyncAPI object must have alphabetical "tags".
message: null
recommended: false
severity: warn
formats:
  - AsyncAPI 3.x
specs:
  - AsyncAPI 3.x
functions:
  - alphabetical
properties:
  - tags
given: $.info
definition: |-
  asyncapi-3-tags-alphabetical:
    description: AsyncAPI object must have alphabetical "tags".
    recommended: false
    formats:
      - AsyncAPI 3.x
    given: $.info
    then:
      field: tags
      function: alphabetical
      functionOptions:
        keyedBy: name
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-tags-alphabetical
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
AsyncAPI object should have alphabetical `tags`. This will be sorted by the `name` property.

**Bad Example**

```yaml
info:
  tags:
    - name: "Badger"
    - name: "Aardvark"
```

**Good Example**

```yaml
info:
  tags:
    - name: "Aardvark"
    - name: "Badger"
```
{% endraw %}
