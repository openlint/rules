---
layout: rule
title: asyncapi-info-license
permalink: /asyncapi-info-license/
summary: Info object must have "license" object.
slug: asyncapi-info-license
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Info object must have "license" object.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
functions:
  - truthy
properties:
  - license
given: $
definition: |-
  asyncapi-info-license:
    description: Info object must have "license" object.
    recommended: true
    formats:
      - AsyncAPI 2.x
      - AsyncAPI 3.x
    given: $
    then:
      field: info.license
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-info-license'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
The `info` object should have a `license` key.

It can be hard to pick a license, so if you don't have a lawyer around you can use [TLDRLegal](https://tldrlegal.com/) and [Choose a License](https://choosealicense.com/) to help give you an idea.

How useful this is in court is not entirely known, but having a license is better than not having a license.

**Good Example**

```yaml
asyncapi: "2.0.0"
info:
  license:
    name: MIT
```
{% endraw %}
