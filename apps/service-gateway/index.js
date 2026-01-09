import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Very simple routing logic to resolve System Of Record (A or B):
 * - clientId ending with 'A' -> SOR A
 * - otherwise -> SOR B
 */
function resolveSorBaseUrl(clientId) {
  if ((clientId ?? '').endsWith('A')) return 'http://localhost:5001';
  return 'http://localhost:5002';
}

// Endpoint to simulate 'Client Interaction'
app.post('/gateway', async (req, res) => {
  try {
    const { operation, payload, context } = req.body ?? {};
    const clientId = context?.clientId ?? 'UNKNOWN';

    // For now we only support one operation
    if (operation !== 'getEmployee') {
      return res.status(400).json({ error: 'Unknown operation', operation });
    }

    const aoid = payload?.aoid ?? 'UNKNOWN';
    const baseUrl = resolveSorBaseUrl(clientId);

    // Forward to SOR
    const url = `${baseUrl}/employee?aoid=${encodeURIComponent(aoid)}`;
    const sorResponse = await fetch(url);
    const data = await sorResponse.json();

    // Gateway could normalize response here if needed
    return res.json({
      routedTo: baseUrl,
      clientId,
      operation,
      data,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Gateway error', message: String(err) });
  }
});

app.listen(4000, () => console.log('Gateway running on http://localhost:4000'));
