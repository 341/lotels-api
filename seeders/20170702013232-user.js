'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
      /*
       Add altering commands here.
       Return a promise to correctly handle asynchronicity.

       Example:
       */
        return queryInterface.bulkInsert('users', [{
            username: 'John Doe',
            HotelId: 1
        }], {});
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
