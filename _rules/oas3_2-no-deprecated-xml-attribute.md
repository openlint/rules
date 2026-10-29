---
layout: rule
title: oas3_2-no-deprecated-xml-attribute
permalink: /oas3_2-no-deprecated-xml-attribute/
summary: ''
slug: oas3_2-no-deprecated-xml-attribute
source: built-in
ruleset: 'spectral:oas'
rulesetName: OpenAPI
description: ''
message: >-
  "xml.attribute" is deprecated in OAS 3.2; use "xml.nodeType: attribute"
  instead.
recommended: true
severity: warn
formats:
  - OpenAPI 3.2.x
functions:
  - schema
properties:
  - xml
given:
  - '$..[?(@ && @.xml)].xml'
definition: |-
  oas3_2-no-deprecated-xml-attribute:
    message: >-
      "xml.attribute" is deprecated in OAS 3.2; use "xml.nodeType: attribute"
      instead.
    recommended: true
    formats:
      - OpenAPI 3.2.x
    given:
      - '$..[?(@ && @.xml)].xml'
    then:
      function: schema
      functionOptions:
        schema:
          not:
            properties:
              attribute:
                const: true
            required:
              - attribute
links:
  - name: Reference
    url: >-
      https://docs.openlint.org/reference/openapi-rules/#oas3_2-no-deprecated-xml-attribute
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/oas/index.ts
---

{% raw %}
The `xml.attribute` field is deprecated in OpenAPI v3.2. Use `xml.nodeType: attribute` instead.

Only `xml.attribute: true` is flagged. `xml.attribute: false` is not flagged, since it matches the
default `nodeType` behavior and has no corresponding migration action.

**Bad Example**

```yaml
components:
  schemas:
    Pet:
      properties:
        name:
          type: string
          xml:
            attribute: true
```

**Good Example**

```yaml
components:
  schemas:
    Pet:
      properties:
        name:
          type: string
          xml:
            nodeType: attribute
```
{% endraw %}
