---
layout: rule
title: openapi-tags-alphabetical
permalink: /openapi-tags-alphabetical/
summary: OpenAPI object must have alphabetical "tags".
slug: openapi-tags-alphabetical
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: OpenAPI object must have alphabetical "tags".
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
  - alphabetical
properties:
  - tags
given: $
definition: |-
  openapi-tags-alphabetical:
    description: OpenAPI object must have alphabetical "tags".
    recommended: false
    given: $
    then:
      field: tags
      function: alphabetical
      functionOptions:
        keyedBy: name
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#openapi-tags-alphabetical
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
OpenAPI object should have alphabetical `tags`. This will be sorted by the `name` property.

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
