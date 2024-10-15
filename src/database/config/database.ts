import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    logging: false
  }
);

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso!');
  })
  .catch((err: any) => {
    console.error('Erro ao sincronizar tabelas: ', err);
  });

export default sequelize;
