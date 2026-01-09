/**
 * Client Interaction SDK "library"
 * MFEs call this instead of calling SOR/APIs directly
 */
export function createClientInteractionSdk({ gatewayBaseUrl, getContext }) {
  return {
    async request(operation, payload) {
      const context = getContext?.() ?? {};

      const resp = await fetch(`${gatewayBaseUrl}/gateway`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization Token would be added here...
        },
        body: JSON.stringify({ operation, payload, context }),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`Gateway request failed: ${resp.status} ${text}`);
      }

      return resp.json();
    },
  };
}
