---
layout: rule
title: asyncapi-3-tag-description
permalink: /asyncapi-3-tag-description/
summary: Tag object must have "description".
slug: asyncapi-3-tag-description
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Tag object must have "description".
message: null
recommended: false
severity: warn
formats:
  - AsyncAPI 3.x
specs:
  - AsyncAPI 3.x
functions:
  - truthy
properties:
  - description
given: '$.info.tags[*]'
definition: |-
  asyncapi-3-tag-description:
    description: Tag object must have "description".
    recommended: false
    formats:
      - AsyncAPI 3.x
    given: '$.info.tags[*]'
    then:
      field: description
      function: truthy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-tag-description
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Tags alone are not very descriptive. Give folks a bit more information to work with.

```yaml
info:
  tags:
    - name: "Aardvark"
      description: Funny-nosed pig-head raccoon.
    - name: "Badger"
      description: Angry short-legged omnivores.
```

If your tags are business objects then you can use the term to explain them a bit. An 'Account' could be a user account, company information, bank account, potential sales lead, or anything. What is clear to the folks writing the document is probably not as clear to others.

```yaml
info:
  tags:
    - name: Invoice Items
      description: |+
        Giant long explanation about what this business concept is, because other people _might_ not have a clue!

```
{% endraw %}
