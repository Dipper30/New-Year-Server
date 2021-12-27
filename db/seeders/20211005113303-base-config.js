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
    await queryInterface.bulkInsert('Stores', [
      {
        manager_id: 1,
        name: 'Jane eyre',
        city: 'Phoenix',
        street: '3413 Skips Lane',
        state_id: 6,
        zip_code: 85008,
        region_id: 2
      },
      {
        manager_id: 2,
        name: 'cherry',
        city: 'Tarrytown',
        street: '4396 Mount Tabor',
        state_id: 2,
        zip_code: 10591,
        region_id: 1
      }, {
        manager_id: 3,
        name: 'Waroom',
        city: 'Philadelphia',
        street: '1918 Spring Avenue',
        state_id: 1,
        zip_code: 19108,
        region_id: 1
      }, {
        manager_id: 4,
        name: 'taigu museum',
        city: 'FRESNO',
        street: '2658 Wexford Way',
        state_id: 3,
        zip_code: 43824,
        region_id: 1
      }, {
        manager_id: 5,
        name: 'Mr J Dinner',
        city: 'Portsmouth',
        street: '3188 Pinchelone Street',
        state_id: 4,
        zip_code: 23704,
        region_id: 1
      }, {
        manager_id: 6,
        name: 'MSSugar',
        city: 'Raleigh',
        street: '3435 Johnson Street',
        state_id: 5,
        zip_code: 27604,
        region_id: 2
      }, {
        manager_id: 7,
        name: 'UUJULY',
        city: 'Myrtle Beach',
        street: '810 Broadway Street',
        state_id: 6,
        zip_code: 29577,
        region_id: 2
      }, {
        manager_id: 8,
        name: 'DUEPLAY',
        city: 'Savannah',
        street: '1149 Darwin Street',
        state_id: 7,
        zip_code: 31415,
        region_id: 2
      }, {
        manager_id: 9,
        name: 'DONOTTAG',
        city: 'Boca Raton',
        street: '474 Holt Street',
        state_id: 8,
        zip_code: 33432,
        region_id: 2
      }, {
        manager_id: 10,
        name: 'Tamia',
        city: 'Washington',
        street: '4788 Bluff Street',
        state_id: 9,
        zip_code: 20004,
        region_id: 3
      },
      {
        manager_id: 11,
        name: 'Orfila',
        city: 'Portland',
        street: '4101 Karen Lane',
        state_id: 10,
        zip_code: 97218,
        region_id: 3
      },
      {
        manager_id: 12,
        name: 'stay real',
        city: 'Pittsburgh',
        street: '3955 Bigelow Blvd',
        state_id: 1,
        zip_code: 15213,
        region_id: 1
      }
    ], {})
    await queryInterface.bulkInsert('Staffs', [
      {
        id: 1,
        name: 'Rose',
        job_title: 2,
        store_assigned: 1,
        region_assigned: 2,
        salary: 500000
      },
      {
        id: 2,
        name: 'Yvonne',
        job_title: 2,
        store_assigned: 2,
        region_assigned: 1,
        salary: 400000
      },
      {
        id: 3,
        name: 'Shirley',
        job_title: 2,
        store_assigned: 3,
        region_assigned: 1,
        salary: 600000
      },
      {
        id: 4,
        name: 'Jack',
        job_title: 2,
        store_assigned: 4,
        region_assigned: 1,
        salary: 587963
      },
      {
        id: 5,
        name: 'Ashley',
        job_title: 2,
        store_assigned: 5,
        region_assigned: 1,
        salary: 345678
      },
      {
        id: 6,
        name: 'Rhett',
        job_title: 2,
        store_assigned: 6,
        region_assigned: 2,
        salary: 456789
      },
      {
        id: 7,
        name: 'Melanie',
        job_title: 2,
        store_assigned: 7,
        region_assigned: 2,
        salary: 567891
      },
      {
        id: 8,
        name: 'Scarlet',
        job_title: 2,
        store_assigned: 8,
        region_assigned: 2,
        salary: 876543
      },
      {
        id: 9,
        name: 'Jerry',
        job_title: 2,
        store_assigned: 9,
        region_assigned: 2,
        salary: 987654
      },
      {
        id: 10,
        name: 'Amanda',
        job_title: 2,
        store_assigned: 10,
        region_assigned: 3,
        salary: 878787
      },
      {
        id: 11,
        name: 'Camila',
        job_title: 2,
        store_assigned: 11,
        region_assigned: 3,
        salary: 600000
      },
      {
        id: 12,
        name: 'Charlotte',
        job_title: 2,
        store_assigned: 12,
        region_assigned: 1,
        salary: 565656
      },
      {
        id: 13,
        name: 'Frank',
        job_title: 1,
        store_assigned: 1,
        region_assigned: 2,
        salary: 123456
      },
      {
        id: 14,
        name: 'Alex',
        job_title: 1,
        store_assigned: 3,
        region_assigned: 1,
        salary: 234567
      },
      {
        id: 15,
        name: 'Jason',
        job_title: 1,
        store_assigned: 5,
        region_assigned: 1,
        salary: 333333
      },
      {
        id: 16,
        name: 'Mike',
        job_title: 1,
        store_assigned: 7,
        region_assigned: 2,
        salary: 444444
      },
      {
        id: 17,
        name: 'Mary',
        job_title: 1,
        store_assigned: 9,
        region_assigned: 2,
        salary: 323232
      },
      {
        id: 18,
        name: 'Patrick',
        job_title: 1,
        store_assigned: 11,
        region_assigned: 3,
        salary: 232323
      },
      {
        id: 19,
        name: 'Jacob',
        job_title: 3,
        store_assigned: null,
        region_assigned: 1,
        salary: 999999
      },
      {
        id: 20,
        name: 'Edward',
        job_title: 3,
        store_assigned: null,
        region_assigned: 2,
        salary: 888888
      },
      {
        id: 21,
        name: 'Bella',
        job_title: 3,
        store_assigned: null,
        region_assigned: 3,
        salary: 777777
      },
      {
        id: 22,
        name: 'Barney',
        job_title: 3,
        store_assigned: null,
        region_assigned: 4,
        salary: 989898
      },
      {
        id: 23,
        name: 'Robin',
        job_title: 3,
        store_assigned: null,
        region_assigned: 5,
        salary: 979797
      }

    ], {})
    await queryInterface.bulkInsert('States', [
      {
        name: 'Pennsylvania',
        region_id: 1,
      },
      {
        name: 'New York',
        region_id: 1,
      },
      {
        name: 'Ohio',
        region_id: 1,
      },
      {
        name: 'Virginia',
        region_id: 1,
      },
      {
        name: 'North Carolina',
        region_id: 2,
      },
      {
        name: 'South Carolina',
        region_id: 2,
      },
      {
        name: 'Georgia',
        region_id: 2,
      },
      {
        name: 'Florida',
        region_id: 2,
      },
      {
        name: 'Washington',
        region_id: 3,
      },
      {
        name: 'Oregon',
        region_id: 3,
      },
      {
        name: 'California',
        region_id: 3,
      },
      {
        name: 'Arizona',
        region_id: 3,
      },
      {
        name: 'Texas',
        region_id: 4,
      },
      {
        name: 'Kansas',
        region_id: 4,
      },
      {
        name: 'Colorado',
        region_id: 4,
      },
      {
        name: 'Minnesota',
        region_id: 4,
      },
      {
        name: 'Mars I',
        region_id: 5,
      },
      {
        name: 'Mars II',
        region_id: 5,
      }
    ], {})
    await queryInterface.bulkInsert('Regions', [
      {
        name: 'North East Region',
        manager_id: 19,
      },
      {
        name: 'South East Region',
        manager_id: 20,
      },
      {
        name: 'West Region',
        manager_id: 21,
      },
      {
        name: 'Middle Region',
        manager_id: 22,
      },
      {
        name: 'Mars Region',
        manager_id: 23,
      }
    ], {})
    await queryInterface.bulkInsert('Business_Types', [
      {
        name: 'Factory',
        type: 1,
      },
      {
        name: 'Internet Services',
        type: 2,
      },
      {
        name: 'Media Company',
        type: 3,
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Stores', null, {})
     await queryInterface.bulkDelete('Staffs', null, {})
     await queryInterface.bulkDelete('States', null, {})
     await queryInterface.bulkDelete('Regions', null, {})
     await queryInterface.bulkDelete('Business_Types', null, {})
  }
};
