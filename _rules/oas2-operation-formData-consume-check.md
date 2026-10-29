---
layout: rule
title: oas2-operation-formData-consume-check
permalink: /oas2-operation-formData-consume-check/
summary: >-
  Operations with "in: formData" parameter must include
  "application/x-www-form-urlencoded" or "multipart/form-data" in their
  "consumes" property.
slug: oas2-operation-formData-consume-check
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: >-
  Operations with "in: formData" parameter must include
  "application/x-www-form-urlencoded" or "multipart/form-data" in their
  "consumes" property.
message: null
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
specs:
  - OpenAPI 2.0
functions:
  - oasOpFormDataConsumeCheck
properties:
  - operation
given: '#OperationObject'
definition: |-
  oas2-operation-formData-consume-check:
    description: >-
      Operations with "in: formData" parameter must include
      "application/x-www-form-urlencoded" or "multipart/form-data" in their
      "consumes" property.
    recommended: true
    formats:
      - OpenAPI 2.0 (Swagger)
    given: '#OperationObject'
    then:
      function: oasOpFormDataConsumeCheck
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas2-operation-formData-consume-check
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Operations with an `in: formData` parameter must include `application/x-www-form-urlencoded` or `multipart/form-data` in their `consumes` property.
{% endraw %}
