'use strict';

var faker = require('faker');

module.exports = {
    up: function (queryInterface, Sequelize) {
        /*
         Add altering commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         */
        return queryInterface.bulkInsert('Users', [
            {
                username: faker.name.firstName().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'),
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                type: faker.random.arrayElement([10, 20, 30, 40, 50]),
                status: faker.random.arrayElement([10, 20, 30, 40, 50]),
                email: faker.internet.email()
            },
            // {
            //     username: faker.name.firstName(),//.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'),
            //     first_name: faker.name.firstName(),
            //     last_name: faker.name.lastName(),
            //     type: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     status: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     email: faker.internet.email()
            // },
            // {
            //     username: faker.name.firstName(),//.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'),
            //     first_name: faker.name.firstName(),
            //     last_name: faker.name.lastName(),
            //     type: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     status: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     email: faker.internet.email()
            // },
            // {
            //     username: faker.name.firstName(),//.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'),
            //     first_name: faker.name.firstName(),
            //     last_name: faker.name.lastName(),
            //     type: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     status: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     email: faker.internet.email()
            // },
            // {
            //     username: faker.name.firstName(),//.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'),
            //     first_name: faker.name.firstName(),
            //     last_name: faker.name.lastName(),
            //     type: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     status: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     email: faker.internet.email()
            // },
            // {
            //     username: faker.name.firstName(),//.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'),
            //     first_name: faker.name.firstName(),
            //     last_name: faker.name.lastName(),
            //     type: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     status: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     email: faker.internet.email()
            // },
            // {
            //     username: faker.name.firstName(),//.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'),
            //     first_name: faker.name.firstName(),
            //     last_name: faker.name.lastName(),
            //     type: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     status: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     email: faker.internet.email()
            // },
            // {
            //     username: faker.name.firstName(),//.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'),
            //     first_name: faker.name.firstName(),
            //     last_name: faker.name.lastName(),
            //     type: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     status: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     email: faker.internet.email()
            // },
            // {
            //     username: faker.name.firstName(),//.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'),
            //     first_name: faker.name.firstName(),
            //     last_name: faker.name.lastName(),
            //     type: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     status: faker.random.arrayElement([10, 20, 30, 40, 50]),
            //     email: faker.internet.email()
            // }
        ], {});
    },

    down: function (queryInterface, Sequelize) {
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         return queryInterface.bulkDelete('Person', null, {});
         */
    }
};
