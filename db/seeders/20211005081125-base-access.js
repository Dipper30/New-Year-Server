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
   
    await queryInterface.bulkInsert('Accesses', [
      {
        name: 'log in main',
        type: 1,
      },
      {
        name: 'browse products',
        type: 2,
      },
      {
        name: 'read products',
        type: 3,
      },
      {
        name: 'buy products',
        type: 4,
      },
      {
        name: 'make comments',
        type: 5,
      },
      {
        name: 'log in admin',
        type: 11,
      },
      {
        name: 'access business data',
        type: 12,
      },
      {
        name: 'access region data',
        type: 13,
      },
      {
        name: 'access store data',
        type: 14,
      },
    ], {})
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'home',
        type: 1,
      },
      {
        name: 'business',
        type: 2,
      },
      {
        name: 'admin',
        type: 99
      }
    ], {})
    await queryInterface.bulkInsert('Access_Roles', [
      {
        rid: 1,
        aid: 1,
      },
      {
        rid: 1,
        aid: 2,
      },
      {
        rid: 1,
        aid: 3,
      },
      {
        rid: 1,
        aid: 4,
      },
      {
        rid: 1,
        aid: 5,
      },
      {
        rid: 2,
        aid: 1,
      },
      {
        rid: 2,
        aid: 2,
      },
      {
        rid: 2,
        aid: 3,
      },
      {
        rid: 2,
        aid: 4,
      },
      {
        rid: 2,
        aid: 5,
      },
      {
        rid: 99,
        aid: 1
      },
      {
        rid: 99,
        aid: 2
      },
      {
        rid: 99,
        aid: 3
      },
      {
        rid: 99,
        aid: 4
      },
      {
        rid: 99,
        aid: 11
      },
      {
        rid: 99,
        aid: 12
      },
      {
        rid: 99,
        aid: 13
      },
      {
        rid: 99,
        aid: 14
      }
    ], {})
    // await queryInterface.bulkInsert('Users', [
    //   {
    //     username: 'admin',
    //     password: '123456',
    //     role_id: 99,
    //   }
    // ], {})
    // await queryInterface.bulkInsert('Admins', [
    //   {
    //     name: 'Admin',
    //     uid: 1,
    //   }
    // ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Accesses', null, {})
    await queryInterface.bulkDelete('Roles', null, {})
    await queryInterface.bulkDelete('Access_Roles', null, {})
    await queryInterface.bulkDelete('Users', null, {})
    await queryInterface.bulkDelete('Admins', null, {})
  }
};
