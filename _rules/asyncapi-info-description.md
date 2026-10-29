---
layout: rule
title: asyncapi-info-description
permalink: /asyncapi-info-description/
summary: Info "description" must be present and non-empty string.
slug: asyncapi-info-description
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: Info "description" must be present and non-empty string.
message: null
recommended: true
severity: warn
formats:
  - AsyncAPI 2.x
  - AsyncAPI 3.x
functions:
  - truthy
properties:
  - description
given: $
definition: |-
  asyncapi-info-description:
    description: Info "description" must be present and non-empty string.
    recommended: true
    formats:
      - AsyncAPI 2.x
      - AsyncAPI 3.x
    given: $
    then:
      field: info.description
      function: truthy
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-info-description
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
AsyncAPI object info `description` must be present and non-empty string.

Examples can contain Markdown so you can really go to town with them, implementing getting started information like where to find authentication keys, and how to use them.

**Good Example**

```yaml
asyncapi: "2.0.0"
info:
  version: "1.0.0"
  title: Descriptive API
  description: >+
    Some description about the general point of this API, and why it exists when another similar but different API also exists.

```
{% endraw %}
