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
            // created_at: {
            //     allowNull: false,
            //     type: Sequelize.DATE
            // },
            // updated_at: {
            //     allowNull: false,
            //     type: Sequelize.DATE
            // },
            employee_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'cascade',
                onDelete: 'cascade',
                allowNull: true,
                references: {
                    model: 'Employees',
                    key: 'id'
                }
            },
            customer_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'cascade',
                onDelete: 'cascade',
                allowNull: true,
                references: {
                    model: 'Customers',
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
        },{
            timestamps: true
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Reservations');
    }
};
