---
layout: rule
title: asyncapi-3-payload-unsupported-schemaFormat
permalink: /asyncapi-3-payload-unsupported-schemaFormat/
summary: >-
  Message schema validation is only supported with default unspecified
  "schemaFormat".
slug: asyncapi-3-payload-unsupported-schemaFormat
source: built-in
ruleset: 'spectral:asyncapi'
rulesetName: AsyncAPI
description: >-
  Message schema validation is only supported with default unspecified
  "schemaFormat".
message: null
recommended: true
severity: info
formats:
  - AsyncAPI 3.x
specs:
  - AsyncAPI 3.x
functions:
  - undefined
properties:
  - schemaFormat
given:
  - $.components.messages.*.payload
  - $.channels.*.messages.*.payload
definition: |-
  asyncapi-3-payload-unsupported-schemaFormat:
    description: >-
      Message schema validation is only supported with default unspecified
      "schemaFormat".
    severity: info
    recommended: true
    formats:
      - AsyncAPI 3.x
    given:
      - $.components.messages.*.payload
      - $.channels.*.messages.*.payload
    then:
      field: schemaFormat
      function: undefined
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/asyncapi-rules/#asyncapi-3-payload-unsupported-schemaFormat
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/asyncapi/index.ts
---

{% raw %}
AsyncAPI can support various `schemaFormat` values. When unspecified, one of the following will be assumed:

application/vnd.aai.asyncapi;version=2.0.0
application/vnd.aai.asyncapi+json;version=2.0.0
application/vnd.aai.asyncapi+yaml;version=2.0.0

At this point, explicitly setting `schemaFormat` is not supported by Spectral, so if you use it this rule will emit an info message and skip validating the payload.

Other formats such as OpenAPI Schema Object, JSON Schema Draft 07, and Avro will be added in various upcoming versions.
{% endraw %}
