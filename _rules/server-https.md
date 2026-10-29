---
layout: rule
title: server-https
permalink: /server-https/
summary: Every server URL uses https.
slug: server-https
source: learn
ruleset: null
rulesetName: OpenLint Learn
description: Every server URL uses https.
message: '{{value}} must use https'
recommended: true
severity: warn
formats:
  - OpenAPI 3.x
specs:
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - pattern
properties:
  - url
given: '#Servers.url'
definition: |-
  aliases:
    Servers:
      - '$.servers[*]'
      - '$.paths[*].servers[*]'
      - '$.paths[*][get,put,post,delete,options,head,patch,trace].servers[*]'
      - '$..callbacks[*][*].servers[*]'
      - >-
        $..callbacks[*][*][get,put,post,delete,options,head,patch,trace].servers[*]
  rules:
    server-https:
      description: Every server URL uses https.
      message: '{{value}} must use https'
      given: '#Servers.url'
      then:
        function: pattern
        functionOptions:
          match: '^https://'
links:
  - name: OpenLint Learn
    url: 'https://learn.openlint.org/snippets/'
---

{% raw %}
The built-in server rules check only the top-level `servers`. OpenAPI 3 also allows `servers` on path items and operations, including operations inside callbacks, and a recursive `$..servers` also catches unrelated properties named `servers` in schemas and examples. The `Servers` alias selects exactly the real ones.

Tested with OpenLint 1.0.0 on a document with `servers` at the root, on a path, on an operation and in a callback, plus a schema and an example with a `servers` property: it reported the four real ones and neither of the others.

{% endraw %}
