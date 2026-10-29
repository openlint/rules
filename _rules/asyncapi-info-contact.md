---
layout: rule
title: asyncapi-info-contact
permalink: /asyncapi-info-contact/
summary: Info object must have "contact" object.
slug: asyncapi-info-contact
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Info object must have "contact" object.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
functions:
  - truthy
properties:
  - contact
given: $
definition: |-
  asyncapi-info-contact:
    description: Info object must have "contact" object.
    recommended: true
    formats:
      - AsyncAPI 2.x
      - AsyncAPI 3.x
    given: $
    then:
      field: info.contact
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-info-contact'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
Info object should contain `contact` object.

Hopefully, your API description document is so good that nobody ever needs to contact you with questions, but that is rarely the case. The contact object has a few different options for contact details.

**Good Example**

```yaml
asyncapi: "2.0.0"
info:
  title: Awesome API
  version: "1.0"
  contact:
    name: A-Team
    email: a-team@goarmy.com
```
{% endraw %}
