'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      First_name: {
        type: Sequelize.STRING
      },
      Last_name: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Date_of_birth: {
        type: Sequelize.INTEGER
      },
      Mobile_Number: {
        type: Sequelize.INTEGER,
      },
      Gender: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};