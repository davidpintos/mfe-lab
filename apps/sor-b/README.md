# System of Record B (BE)

## Overview

This service represents a **System of Record**, responsible for owning and serving
authoritative domain data.

It is the final source of truth for its domain.

---

## Responsibilities

- Own and manage domain data
- Handle business rules within its domain
- Respond to requests forwarded by the Service Gateway

---

## What it does NOT do

- It does not know about Micro-Frontends
- It does not perform routing decisions
- It does not expose UI concerns
