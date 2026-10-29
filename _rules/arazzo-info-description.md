---
layout: rule
title: arazzo-info-description
permalink: /arazzo-info-description/
summary: Info "description" should be present and non-empty string.
slug: arazzo-info-description
source: built-in
ruleset: 'spectral:arazzo'
rulesetName: Arazzo
description: Info "description" should be present and non-empty string.
message: null
recommended: true
severity: warn
formats:
  - Arazzo 1.0.x
specs:
  - Arazzo 1.0
functions:
  - truthy
properties:
  - description
given: $
definition: |-
  arazzo-info-description:
    description: Info "description" should be present and non-empty string.
    severity: warn
    given: $
    then:
      field: info.description
      function: truthy
links:
  - name: Reference
    url: 'https://docs.openlint.org/reference/arazzo-rules/#arazzo-info-description'
  - name: Source
    url: >-
      https://github.com/openlint/openlint/blob/main/packages/rulesets/src/arazzo/index.ts
---

{% raw %}
Arazzo object info `description` must be present and non-empty string.

Examples can contain Markdown so you can really go to town with them, implementing getting started information like what the workflows contained can do and how you can get up and running.

**Good Example**

```yaml
arazzo: 1.0.0
info:
  title: BNPL Workflow Description
  version: 1.0.0
  description: |
    ## Overview

    This workflow guides the process of applying for a loan at checkout using a "Buy Now, Pay Later" (BNPL) platform. It orchestrates a series of API interactions to ensure a seamless and efficient loan application process, integrating multiple services across different API providers.

    ### Key Features
    - **Multi-step Loan Application:** The workflow includes multiple steps to check product eligibility, retrieve terms and conditions, create customer profiles, initiate the loan, and finalize the payment plan.
    - **Dynamic Decision Making:** Based on the API responses, the workflow adapts the flow, for example, skipping customer creation if the customer is already registered or ending the workflow if no eligible products are found.
    - **User-Centric:** The workflow handles both existing and new customers, providing a flexible approach to customer onboarding and loan authorization.
```
{% endraw %}
