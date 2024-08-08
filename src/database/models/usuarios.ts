import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Usuarios extends Model {
  public id!: number;
  public email!: string;
  public senha!: string;
}

Usuarios.init({
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
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'usuarios',
});

export default Usuarios;
