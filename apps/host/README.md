# Host Shell (HCM)

## Overview

The Host Shell is responsible for **routing, client-based gating, and runtime composition**
of Micro-Frontends.

It determines which Micro-Frontend should be rendered based on client context and
loads it dynamically at runtime.

---

## Responsibilities

- Evaluate client-based rules (e.g. clientId, feature flags)
- Dynamically load and mount Micro-Frontends
- Own global layout and navigation
- Provide minimal contextual information to MFEs

---

## What it does NOT do

- It does not call backend services
- It does not communicate with Systems of Record
- It does not process domain or business data
