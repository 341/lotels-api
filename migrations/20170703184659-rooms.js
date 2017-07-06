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
            type_id: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'room_types',
                    key: 'id'
                }
            },
            location_id: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'facility_locations',
                    key: 'id'
                }
            },
            facility_id: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'facilities',
                    key: 'id'
                }
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('rooms');
    }
};
