---
layout: rule
title: asyncapi-info-license-url
permalink: /asyncapi-info-license-url/
summary: License object must include "url".
slug: asyncapi-info-license-url
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: License object must include "url".
message: null
recommended: false
severity: warn
formats:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
specs:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
functions:
  - truthy
properties:
  - url
given: $
definition: |-
  asyncapi-info-license-url:
    description: License object must include "url".
    recommended: false
    formats:
      - AsyncAPI 2.x
      - AsyncAPI 3.x
    given: $
    then:
      field: info.license.url
      function: truthy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-info-license-url
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Mentioning a license is only useful if people know what the license means, so add a link to the full text for those who need it.

**Good Example**

```yaml
asyncapi: "2.0.0"
info:
  license:
    name: MIT
    url: https://www.tldrlegal.com/l/mit
```
{% endraw %}
