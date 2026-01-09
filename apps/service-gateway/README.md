# Service Gateway

## Overview

The Service Gateway acts as a **single backend entry point** for all Micro-Frontend
interactions.

It is responsible for routing requests to the appropriate System of Record.

---

## Responsibilities

- Receive requests from the Client Interaction SDK
- Resolve the target System of Record based on context
- Forward requests to backend services
- Optionally normalize responses

---

## What it does NOT do

- It does not render UI
- It does not contain frontend-specific logic
- It does not own domain data
