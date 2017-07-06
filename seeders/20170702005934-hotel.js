'use strict';

var faker = require('faker');

module.exports = {
    up: function (queryInterface, Sequelize) {
        /*
         Add altering commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         */
        return queryInterface.bulkInsert('hotels', [
            {
                name: faker.company.companyName() ,
                street_address: faker.address.streetAddress(),
                city: faker.address.city(),
                zip_code: faker.address.zipCode(),
                country: faker.address.country(),
                email: faker.internet.email()
            },
            {
                name: faker.company.companyName() ,
                street_address: faker.address.streetAddress(),
                city: faker.address.city(),
                zip_code: faker.address.zipCode(),
                country: faker.address.country(),
                email: faker.internet.email()
            }
        ], {});
    },

    down: function (queryInterface, Sequelize) {
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         */
         return queryInterface.bulkDelete('hotels', null, {});
    }
};
