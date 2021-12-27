'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gid: {
        type: Sequelize.INTEGER
      },
      root: {
        type: Sequelize.INTEGER
      },
      uid: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      uploadedAt: {
        type: Sequelize.BIGINT
      },
      visible: {
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};