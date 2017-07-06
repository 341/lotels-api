'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('facility_locations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                unique: true
            },
            locations: {
                type: Sequelize.ENUM('1','2'),
                unique: true
            },
            description: {
                type: Sequelize.STRING
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('facility_locations');
    }
};
