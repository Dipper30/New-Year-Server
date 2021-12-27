'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Greetings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      uploadedAt: {
        type: Sequelize.BIGINT
      },
      like: {
        type: Sequelize.INTEGER
      },
      uid: {
        type: Sequelize.INTEGER
      },
      visible: {
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Greetings');
  }
};