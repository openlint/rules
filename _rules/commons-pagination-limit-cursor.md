---
layout: rule
title: commons-pagination-limit-cursor
permalink: /commons-pagination-limit-cursor/
summary: >-
  Page with limit and cursor. limit is the most common paging parameter (51
  providers), ahead of page (49) and page_size (38); cursor (25) is the most
  common continuation token. Offset paging is fine; this flags the long tail of
  synonyms.
slug: commons-pagination-limit-cursor
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  Page with limit and cursor. limit is the most common paging parameter (51
  providers), ahead of page (49) and page_size (38); cursor (25) is the most
  common continuation token. Offset paging is fine; this flags the long tail of
  synonyms.
message: '{{value}} is a paging synonym; the common pair is limit + cursor.'
recommended: false
severity: info
formats:
  - OpenAPI 3.x
specs:
  - OpenAPI 3.0
  - OpenAPI 3.1
  - OpenAPI 3.2
functions:
  - pattern
properties:
  - name
given: '$.paths[*][*].parameters[?(@.in == ''query'')].name'
definition: |-
  rules:
    commons-pagination-limit-cursor:
      description: >-
        Page with limit and cursor. limit is the most common paging parameter (51
        providers), ahead of page (49) and page_size (38); cursor (25) is the most
        common continuation token. Offset paging is fine; this flags the long tail
        of synonyms.
      message: '{{value}} is a paging synonym; the common pair is limit + cursor.'
      severity: info
      given: '$.paths[*][*].parameters[?(@.in == ''query'')].name'
      then:
        function: pattern
        functionOptions:
          notMatch: >-
            ^(per_page|perPage|page_size|pageSize|top|\$top|skip|\$skip|max_results|maxResults|size|page_token|pageToken)$
      recommended: false
links:
  - name: API Commons Naming
    url: 'https://github.com/api-commons/schema-commons'
---

{% raw %}
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files: 134 providers tagged CRM in APIs.io, 1,155 OpenAPI documents the providers published themselves. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: the common CRM OpenAPI (api-commons/crm openapi.yml) is clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
