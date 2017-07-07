'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Reservations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            start:{
                allowNull: false,
                type: Sequelize.DATE
            },
            end:{
                allowNull: false,
                type: Sequelize.DATE
            },
            employeeId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'Employees',
                    key: 'id'
                }
            },
            customerId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'Customers',
                    key: 'id'
                }
            },
            roomId: {
                type: Sequelize.INTEGER,
                //onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'Rooms',
                    key: 'id'
                }
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Reservations');
    }
};
