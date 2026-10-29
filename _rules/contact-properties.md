---
layout: rule
title: contact-properties
permalink: /contact-properties/
summary: 'Contact object must have "name", "url" and "email".'
slug: contact-properties
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: 'Contact object must have "name", "url" and "email".'
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
  - email
  - name
  - url
given: $.info.contact
definition: |-
  contact-properties:
    description: 'Contact object must have "name", "url" and "email".'
    recommended: false
    given: $.info.contact
    then:
      - field: name
        function: truthy
      - field: url
        function: truthy
      - field: email
        function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#contact-properties'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
The [info-contact](/info-contact/) rule will ask you to put in a contact object, and this rule will make sure it's full of the most useful properties: `name`, `url`, and `email`.

Putting in the name of the developer/team/department/company responsible for the API, along with the support email and help-desk/GitHub Issues/whatever URL means people know where to go for help. This can mean more money in the bank, instead of developers just wandering off or complaining online.

**Good Example**

```yaml
openapi: "3.0.2"
info:
  title: Awesome API
  description: A very well-defined API
  version: "1.0"
  contact:
    name: A-Team
    email: a-team@goarmy.com
    url: goarmy.com/apis/support
```
{% endraw %}
