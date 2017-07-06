'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('reservation_days', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            start:{
                type: Sequelize.DATE
            },
            end:{
                type: Sequelize.DATE
            },
            reservation_id: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'reservations',
                    key: 'id'
                }
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('room_services');
    }
};
