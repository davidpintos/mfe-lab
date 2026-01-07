## Micro-Frontend Proof of Concept

This repository contains a **Micro-Frontend Proof of Concept** demonstrating **runtime composition** using a **Host Shell** and **independently deployed remotes**, inspired by real-world **enterprise architectures**.

The Host dynamically decides which Micro-Frontend to render at runtime, while each MFE is built and deployed independently. This setup reflects common enterprise patterns such as Host-driven composition, runtime module federation, and clear separation of responsibilities between the container and the remotes.

## Flow Diagram:
```mermaid
flowchart TD
  U["User"] --> H["Host Shell (HCM)"]

  H --> A["MFE A (RemoteApp)"]
  H --> B["MFE B (RemoteApp)"]

  A --> SDK["Client Interaction SDK"]
  B --> SDK

  SDK --> GW["Service Gateway"]

  GW --> SORA["SOR A"]
  GW --> SORB["SOR B"]

  SORA --> GW
  SORB --> GW

  GW --> SDK
```
## Sequence Diagram
```mermaid
sequenceDiagram
  participant User
  participant Host
  participant MFE
  participant SDK
  participant Gateway
  participant SOR

  User->>Host: Navigate to page
  Host->>Host: Evaluate clientId rules
  Host->>MFE: Load remoteEntry and mount

  User->>MFE: User action
  MFE->>SDK: request(operation)
  SDK->>Gateway: POST gateway
  Gateway->>Gateway: Resolve SOR
  Gateway->>SOR: Forward request
  SOR-->>Gateway: Response
  Gateway-->>SDK: Response
  SDK-->>MFE: Data
  MFE-->>User: Render UI
```