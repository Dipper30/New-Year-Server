'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CheckedMessages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uid: {
        type: Sequelize.INTEGER
      },
      lastCheck: {
        type: Sequelize.BIGINT
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CheckedMessages');
  }
};