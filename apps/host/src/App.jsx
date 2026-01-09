import { Suspense, useState, lazy } from 'react';

const RemoteA = lazy(() => import('mfe_a/RemoteApp'));
const RemoteB = lazy(() => import('mfe_b/RemoteApp'));

// Some values for our MFEs
const clientId_A = 'CLIENT_A';
const clientId_B = 'CLIENT_B';
const AOID_A = '123';
const AOID_B = '456';

export default function App() {
  const [selected, setSelected] = useState('A');

  const RemoteComponent = selected === 'A' ? RemoteA : RemoteB;

  return (
    <div style={{ fontFamily: 'system-ui', padding: 24 }}>
      <h1>Host Shell (Container)</h1>

      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <button onClick={() => setSelected('A')}>Show MFE A</button>
        <button onClick={() => setSelected('B')}>Show MFE B</button>
      </div>

      <Suspense fallback={<div>Loading Micro-Frontend...</div>}>
        <RemoteComponent clientId={selected === 'A' ? clientId_A : clientId_B} aoid={selected === 'A' ? AOID_A : AOID_B}  />
      </Suspense>
    </div>
  );
}
