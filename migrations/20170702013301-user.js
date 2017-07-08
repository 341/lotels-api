'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            username: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            first_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            last_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            type: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                validate: {
                    isEmail: true,
                }
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            // facility_id: {
            //     type: Sequelize.INTEGER,
            //     allowNull: true,
            //     defaultValue: null,
            //     onUpdate: 'cascade',
            //     onDelete: 'cascade',
            //     references: {
            //         model: 'facilities',
            //         key: 'id'
            //     }
            // }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Users');
    }
};