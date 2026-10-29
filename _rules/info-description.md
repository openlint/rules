---
layout: rule
title: info-description
permalink: /info-description/
summary: Info "description" must be present and non-empty string.
slug: info-description
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: Info "description" must be present and non-empty string.
message: null
recommended: true
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
  - description
given: $
definition: |-
  info-description:
    description: Info "description" must be present and non-empty string.
    recommended: true
    given: $
    then:
      field: info.description
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/openapi-rules/#info-description'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
OpenAPI object info `description` must be present and non-empty string.

Examples can contain Markdown so you can really go to town with them, implementing getting started information like where to find authentication keys, and how to use them.

**Good Example**

```yaml
openapi: 3.0.0
info:
  version: "1.0.0"
  title: Descriptive API
  description: >+
    Some description about the general point of this API, and why it exists when another similar but different API also exists.## AuthenticationThis API uses OAuth2 and tokens can be requested from [Dev Portal: Tokens](https://example.org/developers/tokens).

```
{% endraw %}
