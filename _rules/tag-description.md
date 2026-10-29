---
layout: rule
title: tag-description
permalink: /tag-description/
summary: Tag object must have "description".
slug: tag-description
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Tag object must have "description".
message: null
recommended: false
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
specs:
  - OpenAPI 2.0
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - truthy
properties:
  - description
given: '$.tags[*]'
definition: |-
  tag-description:
    description: Tag object must have "description".
    recommended: false
    given: '$.tags[*]'
    then:
      field: description
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#tag-description'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Tags alone are not very descriptive. Give folks a bit more information to work with.

```yaml
tags:
  - name: "Aardvark"
    description: Funny-nosed pig-head raccoon.
  - name: "Badger"
    description: Angry short-legged omnivores.
```

If your tags are business objects then you can use the term to explain them a bit. An 'Account' could be a user account, company information, bank account, potential sales lead, or anything. What is clear to the folks writing the document is probably not as clear to others.

```yaml
tags:
  - name: Invoice Items
    description: |+
      Giant long explanation about what this business concept is, because other people _might_ not have a clue!

```
{% endraw %}
