'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('rooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            typeID: {
                type: Sequelize.INTEGER,
                //onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'RoomTypes',
                    key: 'id'
                }
            },
            locationId: {
                type: Sequelize.INTEGER,
                //onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'FacilityLocation',
                    key: 'id'
                }
            },
            facilityId: {
                type: Sequelize.INTEGER,
                //onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'Facilities',
                    key: 'id'
                }
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('rooms');
    }
};
