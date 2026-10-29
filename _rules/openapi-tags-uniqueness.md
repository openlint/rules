---
layout: rule
title: openapi-tags-uniqueness
permalink: /openapi-tags-uniqueness/
summary: Each tag must have a unique name.
slug: openapi-tags-uniqueness
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Each tag must have a unique name.
message: '{{error}}'
recommended: true
severity: error
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
functions:
  - uniquenessTags
properties:
  - tags
given: $.tags
definition: |-
  openapi-tags-uniqueness:
    description: Each tag must have a unique name.
    message: '{{error}}'
    severity: error
    recommended: true
    given: $.tags
    then:
      function: uniquenessTags
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#openapi-tags-uniqueness'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
OpenAPI object must not have duplicated tag names (identifiers).

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
