'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Rooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            type_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'cascade',
                allowNull: false,
                references: {
                    model: 'RoomTypes',
                    key: 'id'
                }
            },
            location_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'cascade',
                onDelete: 'cascade',
                allowNull: false,
                references: {
                    model: 'FacilityLocations',
                    key: 'id'
                }
            },
            facility_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'cascade',
                onDelete: 'cascade',
                allowNull: true,
                references: {
                    model: 'Facilities',
                    key: 'id'
                }
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Rooms');
    }
};
