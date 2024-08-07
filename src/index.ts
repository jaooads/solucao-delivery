import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import router from '../routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../front')));

app.use(router)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta http://localhost:${PORT}`);
});
