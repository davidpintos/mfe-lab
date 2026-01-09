# Client Interaction SDK

## Overview

The Client Interaction SDK is like a FE library that provides a **shared and stable contract** for Micro-Frontends to interact with backend systems in a decoupled way.

It abstracts transport and routing concerns from MFEs.

---

## Responsibilities

- Expose a simple request-based API to MFEs
- Build and forward request envelopes to the Service Gateway
- Propagate client context and metadata

---

## What it does NOT do

- It does not process or transform business data
- It does not resolve Systems of Record
- It does not contain domain logic
