'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
        {
            name: 'Ferrero',
            cate: 1,
            type: 1,
            price: 200,
            amount: 1000,
            unit: '100g',
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
          },
        {
            name: 'Dove', // string
            cate: 1, // int
            type: 1, // int
            price: 200, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '100g', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        },
        {
            name: 'Hershey', // string
            cate: 1, // int
            type: 1, // int
            price: 200, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '100g', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Oreo', // string
            cate: 1, // int
            type: 3, // int
            price: 500, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '300g', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Chips Ahoy', // string
            cate: 1, // int
            type: 3, // int
            price: 500, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '300g', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Lay\'s potato chips', // string
            cate: 1, // int
            type: 4, // int
            price: 300, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '200g', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
          }, 
        {
            name: 'Coca Cola', // string
            cate: 2, // int
            type: 7, // int
            price: 200, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '250ml', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
          }, 
        {
            name: 'Pepsi', // string
            cate: 2, // int
            type: 7, // int
            price: 250, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '250ml', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Sprite', // string
            cate: 2, // int
            type: 8, // int
            price: 250, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '250ml', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Rio', // string
            cate: 2, // int
            type: 9, // int
            price: 1000, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '200ml', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Deer', // string
            cate: 2, // int
            type: 10, // int
            price: 150, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '250ml', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Kirkland', // string
            cate: 2, // int
            type: 10, // int
            price: 150, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '250ml', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Lactaid', // string
            cate: 2, // int
            type: 11, // int
            price: 600, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '2000ml', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Nishiki Medium Grain Rice', // string
            cate: 3, // int
            type: 13, // int
            price: 600, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '80 ounce', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Keto Snacks Salty Parmesan', // string
            cate: 3, // int
            type: 15, // int
            price: 1500, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '7.5 ounce', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
          }, 
        {
            name: 'Samyang Ramen Chicken Roasted Noodles', // string
            cate: 3, // int
            type: 14, // int
            price: 900, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '4.93 ounce', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'King Arthur', // string
            cate: 3, // int
            type: 16, // int
            price: 5600, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '2 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Value Pack Cod Fillet Wild Frozen MSC', // string
            cate: 4, // int
            type: 19, // int
            price: 2200, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '32 ounce', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'White Gulf White Shrimp', // string
            cate: 4, // int
            type: 20, // int
            price: 2200, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '32 ounce', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Maine Lobster Now', // string
            cate: 4, // int
            type: 22, // int
            price: 19000, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '2 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Apple', // string
            cate: 5, // int
            type: 25, // int
            price: 200, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '1 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Orange', // string
            cate: 5, // int
            type: 26, // int
            price: 200, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '1 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        }, 
        {
            name: 'Mango', // string
            cate: 5, // int
            type: 27, // int
            price: 200, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '1 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        },
        {
            name: 'Melon', // string
            cate: 5, // int
            type: 28, // int
            price: 300, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '1 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        },
        {
            name: 'Peach', // string
            cate: 5, // int
            type: 29, // int
            price: 400, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '1 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        },
        {
            name: 'Pork', // string
            cate: 6, // int
            type: 31, // int
            price: 500, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '1 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        },
        {
            name: 'Chicken', // string
            cate: 6, // int
            type: 32, // int
            price: 500, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '1.5 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        },
        {
            name: 'Chicken1', // string
            cate: 6, // int
            type: 32, // int
            price: 500, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '1.5 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        },
        {
          name: 'Chicken2', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken3', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken4', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken5', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken6', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken7', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken8', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken9', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken10', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken11', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken12', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken13', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken14', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken15', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken16', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken17', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken18', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },{
          name: 'Chicken19', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken20', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken21', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken22', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken23', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
          name: 'Chicken24', // string
          cate: 6, // int
          type: 32, // int
          price: 500, // bigint, eg: 10000 (meaning 100.00$)
          amount: 1000, // int number of inventory
          unit: '1.5 pound', // string, eg: '100g' '1 packet'
          description: 'Tasty products. Hot selling!',
          listTS: null,
          createTS: 1636519287,
        },
        {
            name: 'Beef', // string
            cate: 6, // int
            type: 33, // int
            price: 600, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '1 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        },
        {
            name: 'Mutton', // string
            cate: 6, // int
            type: 34, // int
            price: 500, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '1 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        },
        {
            name: 'Duck', // string
            cate: 6, // int
            type: 35, // int
            price: 500, // bigint, eg: 10000 (meaning 100.00$)
            amount: 1000, // int number of inventory
            unit: '1 pound', // string, eg: '100g' '1 packet'
            description: 'Tasty products. Hot selling!',
            listTS: null,
            createTS: 1636519287,
        },
    ], {})
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {})
  },
}