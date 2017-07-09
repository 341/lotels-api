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
            // created_at: {
            //     allowNull: false,
            //     type: Sequelize.DATE
            // },
            // updated_at: {
            //     allowNull: false,
            //     type: Sequelize.DATE
            // },
            reservation_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'cascade',
                onDelete: 'cascade',
                allowNull: true,
                references: {
                    model: 'Reservations',
                    key: 'id'
                }
            }
        },{
            timestamps: true
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('ReservationDays');
    }
};
