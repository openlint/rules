---
layout: rule
title: info-contact
permalink: /info-contact/
summary: Info object must have "contact" object.
slug: info-contact
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Info object must have "contact" object.
message: null
recommended: true
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
  - contact
given: $
definition: |-
  info-contact:
    description: Info object must have "contact" object.
    recommended: true
    given: $
    then:
      field: info.contact
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#info-contact'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Info object should contain `contact` object.

Hopefully, your API description document is so good that nobody ever needs to contact you with questions, but that is rarely the case. The contact object has a few different options for contact details.

**Good Example**

```yaml
openapi: "3.0.2"
info:
  title: Awesome API
  version: "1.0"
  contact:
    name: A-Team
    email: a-team@goarmy.com
```
{% endraw %}
