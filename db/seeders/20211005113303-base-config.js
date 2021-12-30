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
        id: 1,
        username: "Dipper",
        password: "1f77692534b3d6824030509e8923a991",
      }
    ], {})
    await queryInterface.bulkInsert('Activities', [
      {
        id: 1,
        title: "luck",
        desc: "ad",
        expiresAt: "1640859091559",
        startsAt: "1640759091559"
      }
    ], {})
    await queryInterface.bulkInsert('Messages', [
      {
        title_en: "Try Your Luck",
        title_zh_cn: "新年运势",
        title_ja: "お正月の運勢",
        content_en: "Draw a luck card and test your fortune in the coming year!",
        content_zh_cn: "参加福卡活动，测一测未来一年的运势吧！",
        content_ja: "深香イベントに参加して、来年の運勢を試してみてください！",
        to: 0
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
