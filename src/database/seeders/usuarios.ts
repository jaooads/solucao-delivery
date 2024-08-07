import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
  await queryInterface.bulkInsert('users', [{
    email: 'teste@teste',
    senha: 'joao12345',
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.bulkDelete('users', {}, {});
}
