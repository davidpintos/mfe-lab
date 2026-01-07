```mermaid
flowchart LR
  U["User"] --> H["Host Shell (HCM)"]

  H --> REA["remoteEntry.js (mfe-a)"]
  H --> REB["remoteEntry.js (mfe-b)"]

  REA --> A["MFE A (RemoteApp)"]
  REB --> B["MFE B (RemoteApp)"]

  A --> SDK["Client Interaction SDK"]
  B --> SDK

  SDK --> GW["Service Gateway"]

  GW --> SORA["SOR A"]
  GW --> SORB["SOR B"]

  SORA --> GW
  SORB --> GW

  GW --> SDK

```