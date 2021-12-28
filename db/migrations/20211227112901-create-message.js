'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uploadedAt: {
        type: Sequelize.BIGINT
      },
      to: {
        type: Sequelize.INTEGER
      },
      title_en: {
        type: Sequelize.STRING
      },
      title_zh_cn: {
        type: Sequelize.STRING
      },
      title_ja: {
        type: Sequelize.STRING
      },
      content_en: {
        type: Sequelize.STRING
      },
      content_zh_cn: {
        type: Sequelize.STRING
      },
      content_ja: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Messages');
  }
};