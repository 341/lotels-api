'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('ReservationDays', {
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
            reservationId: {
                type: Sequelize.INTEGER,
                //onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'Reservations',
                    key: 'id'
                }
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('ReservationDays');
    }
};
