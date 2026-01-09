import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/employee', (req, res) => {
  const aoid = req.query.aoid ?? 'UNKNOWN';
  res.json({
    source: 'SOR_A',
    aoid,
    employeeName: 'Alice From SOR A',
    payments: [{ id: 'p1', amount: 100 }],
  });
});

app.listen(5001, () => console.log('SOR A running on http://localhost:5001'));
