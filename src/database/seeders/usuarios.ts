import { QueryInterface, DataTypes } from 'sequelize';

export default async function up(queryInterface: QueryInterface) {
  await queryInterface.bulkInsert('users', [{
    email: 'teste@teste',
    senha: 'joao12345',
    criadoEm: new Date(),
    atualizadoEm: new Date()
  }]);
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.bulkDelete('users', {}, {});
}
