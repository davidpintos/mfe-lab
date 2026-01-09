import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/employee', (req, res) => {
  const aoid = req.query.aoid ?? 'UNKNOWN';
  res.json({
    source: 'SOR_B',
    aoid,
    employeeName: 'Bob From SOR B',
    payments: [{ id: 'p9', amount: 999 }],
  });
});

app.listen(5002, () => console.log('SOR B running on http://localhost:5002'));
