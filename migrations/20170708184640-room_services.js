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
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            service_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'cascade',
                onDelete: 'cascade',
                allowNull: true,
                references: {
                    model: 'Services',
                    key: 'id'
                }
            },
            reservation_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'cascade',
                onDelete: 'cascade',
                allowNull: true,
                references: {
                    model: 'Reservations',
                    key: 'id'
                }
            },
            room_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'cascade',
                onDelete: 'cascade',
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
