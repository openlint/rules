---
layout: rule
title: asyncapi-info-contact-properties
permalink: /asyncapi-info-contact-properties/
summary: 'Contact object must have "name", "url" and "email".'
slug: asyncapi-info-contact-properties
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: 'Contact object must have "name", "url" and "email".'
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
functions:
  - truthy
properties:
  - email
  - name
  - url
given: $.info.contact
definition: |-
  asyncapi-info-contact-properties:
    description: 'Contact object must have "name", "url" and "email".'
    recommended: true
    formats:
      - AsyncAPI 2.x
      - AsyncAPI 3.x
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
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-info-contact-properties
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
The [asyncapi-info-contact](/asyncapi-info-contact/) rule will ask you to put in a contact object, and this rule will make sure it's full of the most useful properties: `name`, `url`, and `email`.

Putting in the name of the developer/team/department/company responsible for the API, along with the support email and help-desk/GitHub Issues/whatever URL means people know where to go for help. This can mean more money in the bank, instead of developers just wandering off or complaining online.

**Good Example**

```yaml
asyncapi: "2.0.0"
info:
  title: Awesome API
  description: A very well-defined API
  version: "1.0"
  contact:
    name: A-Team
    email: a-team@goarmy.com
    url: https://goarmy.com/apis/support
```
{% endraw %}
