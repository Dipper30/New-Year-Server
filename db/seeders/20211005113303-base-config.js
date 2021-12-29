'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        username: "Dipper",
        password: "dp123456",
      }
    ], {})
    await queryInterface.bulkInsert('Activities', [
      {
        title: "luck",
        desc: "ad",
        expiresAt: "1640859091559",
        startsAt: "1640759091559"
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Activities', null, {})
    await queryInterface.bulkDelete('Users', null, {})
  }
};
