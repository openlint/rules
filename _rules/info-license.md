---
layout: rule
title: info-license
permalink: /info-license/
summary: Info object must have "license" object.
slug: info-license
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Info object must have "license" object.
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
  - license
given: $
definition: |-
  info-license:
    description: Info object must have "license" object.
    recommended: false
    given: $
    then:
      field: info.license
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#info-license'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
The `info` object should have a `license` key.

It can be hard to pick a license, so if you don't have a lawyer around you can use [TLDRLegal](https://tldrlegal.com/) and [Choose a License](https://choosealicense.com/) to help give you an idea.

How useful this is in court is not entirely known, but having a license is better than not having a license.

**Good Example**

```yaml
openapi: "3.0.2"
info:
  license:
    name: MIT
```
{% endraw %}
