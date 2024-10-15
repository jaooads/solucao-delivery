import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Lojas extends Model {
  public id!: number;
  public email!: string;
  public nome!: string;
  public descricao!: string;
  public categoria!: string;
  public endereco!: string;
}

Lojas.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'lojas',
});

export default Lojas;