# Micro-Frontend B

## Overview

This Micro-Frontend is an independently built UI module that is loaded at runtime
by the Host Shell.

The MFE is **System-of-Record agnostic** and focuses exclusively on user interaction
and presentation.

---

## Responsibilities

- Render UI for its bounded context
- Handle user interactions
- Request data or operations through the Client Interaction SDK

---

## What it does NOT do

- It does not communicate directly with backend services
- It does not resolve or know about Systems of Record
- It does not contain cross-application routing logic
