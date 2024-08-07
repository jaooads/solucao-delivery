import express from 'express';
import dotenv from 'dotenv';

dotenv.config()


const app = express();
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Servidor online na porta 3000!');
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta http://localhost:${PORT}`);
});
