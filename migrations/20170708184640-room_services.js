'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('RoomServices', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            serviceId: {
                type: Sequelize.INTEGER,
                //onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'Services',
                    key: 'id'
                }
            },
            reservationId: {
                type: Sequelize.INTEGER,
                //onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'Reservations',
                    key: 'id'
                }
            },
            roomIid: {
                type: Sequelize.INTEGER,
               // onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'Rooms',
                    key: 'id'
                }
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('RoomServices');
    }
};
