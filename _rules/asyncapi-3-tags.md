---
layout: rule
title: asyncapi-3-tags
permalink: /asyncapi-3-tags/
summary: AsyncAPI document must have non-empty "tags" array.
slug: asyncapi-3-tags
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: AsyncAPI document must have non-empty "tags" array.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 3.x
specs:
  - AsyncAPI 3.x
functions:
  - truthy
properties:
  - tags
given:
  - $.info
definition: |-
  asyncapi-3-tags:
    description: AsyncAPI document must have non-empty "tags" array.
    recommended: true
    formats:
      - AsyncAPI 3.x
    given:
      - $.info
    then:
      field: tags
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-tags'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
AsyncAPI object should have non-empty `tags` array.

Why? Well, you _can_ reference tags arbitrarily in operations, and definition is optional...

```yaml
invoicedItems:
  address: /invoices/{id}/items
  tags:
    - Invoice Items
```

Defining tags allows you to add more information like a `description`. For more information see [asyncapi-3-tag-description](/asyncapi-3-tag-description/).
{% endraw %}
