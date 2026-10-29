---
layout: rule
title: license-url
permalink: /license-url/
summary: License object must include "url".
slug: license-url
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: License object must include "url".
message: null
recommended: false
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
functions:
  - truthy
properties:
  - url
given: $
definition: |-
  license-url:
    description: License object must include "url".
    recommended: false
    given: $
    then:
      field: info.license.url
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#license-url'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Mentioning a license is only useful if people know what the license means, so add a link to the full text for those who need it.

**Good Example**

```yaml
openapi: "3.0.2"
info:
  license:
    name: MIT
    url: https://www.tldrlegal.com/l/mit
```
{% endraw %}
