---
layout: rule
title: path-keys-no-trailing-slash
permalink: /path-keys-no-trailing-slash/
summary: ''
slug: path-keys-no-trailing-slash
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: ''
message: Path must not end with slash.
recommended: true
severity: warn
formats:
  - OpenAPI 2.0 (Swagger)
  - OpenAPI 3.x
  - OpenAPI 3.0.x
  - OpenAPI 3.1.x
  - OpenAPI 3.2.x
functions:
  - pattern
properties:
  - paths
given: $.paths
definition: |-
  path-keys-no-trailing-slash:
    message: Path must not end with slash.
    recommended: true
    given: $.paths
    then:
      field: '@key'
      function: pattern
      functionOptions:
        notMatch: .+\/$
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#path-keys-no-trailing-slash
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
Keep trailing slashes off of paths, as it can cause some confusion. Some web tooling (like mock servers, real servers, code generators, application frameworks, etc.) will treat `example.com/foo` and `example.com/foo/` as the same thing, but other tooling will not. Avoid any confusion by just documenting them without the slash, and maybe some tooling will let people shove a / on there when they're using it, or maybe not, but at least the docs are suggesting how it should be done properly.
{% endraw %}
