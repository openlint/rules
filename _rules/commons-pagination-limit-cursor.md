---
layout: rule
title: commons-pagination-limit-cursor
permalink: /commons-pagination-limit-cursor/
summary: >-
  Page with limit and cursor. limit is the most common paging parameter (2538
  providers), ahead of page (1805) and page_size (1134); cursor (709) is the
  most common continuation token. Offset paging is fine; this flags the long
  tail of synonyms.
slug: commons-pagination-limit-cursor
source: api-commons
ruleset: null
rulesetName: API Commons Naming
description: >-
  Page with limit and cursor. limit is the most common paging parameter (2538
  providers), ahead of page (1805) and page_size (1134); cursor (709) is the
  most common continuation token. Offset paging is fine; this flags the long
  tail of synonyms.
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
        Page with limit and cursor. limit is the most common paging parameter
        (2538 providers), ahead of page (1805) and page_size (1134); cursor (709)
        is the most common continuation token. Offset paging is fine; this flags
        the long tail of synonyms.
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
Part of the API Commons naming ruleset, which the common schema in every API Commons bounded context is written to (https://github.com/api-commons/schema-commons). The counts are providers, not files, with duplicate listings and shared specifications folded: 6,688 providers across 107 bounded contexts, read from OpenAPI the providers published themselves. They are re-measured and rendered into the ruleset each time a context is added. Opt-in, not recommended by default.

Tested with Spectral 6.15.0: all 98 common OpenAPI documents are clean, and Pipedrive's published v2 OpenAPI is flagged where its names differ from the common vocabulary (add_time and update_time, /activityFields).
{% endraw %}
