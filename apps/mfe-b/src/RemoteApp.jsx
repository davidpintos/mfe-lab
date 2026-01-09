import { useMemo, useState } from 'react';
import { createClientInteractionSdk } from '@mfe-lab/client-interaction-sdk';

const GATEWAY_URL = 'http://localhost:4000';

export default function RemoteApp({ clientId, aoid }) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const sdk = useMemo(() => {
    return createClientInteractionSdk({
      gatewayBaseUrl: GATEWAY_URL,
      getContext: () => ({ clientId }),
    });
  }, [clientId]);

  async function load() {
    setError('');
    setResult(null);
    try {
      // Executing the "getEmployee" operation
      const data = await sdk.request('getEmployee', { aoid });
      setResult(data);
    } catch (e) {
      setError(String(e));
    }
  }

  return (
    <div style={{ padding: 16, border: '2px solid #999', borderRadius: 12 }}>
      <h2>MFE B</h2>
      <p>ClientId: <b>{clientId}</b></p>
      <p>AOID: <b>{aoid}</b></p>

      <button onClick={load}>Load employee via SDK → Gateway → SOR</button>

      {error ? <pre style={{ marginTop: 12 }}>{error}</pre> : null}
      {result ? <pre style={{ marginTop: 12 }}>{JSON.stringify(result, null, 2)}</pre> : null}
    </div>
  );
}
