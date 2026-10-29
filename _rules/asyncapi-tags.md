---
layout: rule
title: asyncapi-tags
permalink: /asyncapi-tags/
summary: AsyncAPI object must have non-empty "tags" array.
slug: asyncapi-tags
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: AsyncAPI object must have non-empty "tags" array.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
specs:
  - AsyncAPI 2.x
functions:
  - truthy
properties:
  - tags
given: $
definition: |-
  asyncapi-tags:
    description: AsyncAPI object must have non-empty "tags" array.
    recommended: true
    formats:
      - AsyncAPI 2.x
    given: $
    then:
      field: tags
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-tags'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
AsyncAPI root object should have non-empty `tags` array.

Why? Well, you _can_ reference tags arbitrarily in operations, and definition is optional...

```yaml
/invoices/{id}/items:
  tags:
    - Invoice Items
```

Defining tags allows you to add more information like a `description`. For more information see [asyncapi-tag-description](/asyncapi-tag-description/).
{% endraw %}
