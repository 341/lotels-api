'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Employees', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            street_address: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            zip_code: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            birthday: {
                type: Sequelize.DATE
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            userId: {
                type: Sequelize.INTEGER,
                //onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Employees');
    }
};
