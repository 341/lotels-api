'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('managers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            street_address: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            zip_code: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            birthday: {
                allowNull: false,
                type: Sequelize.DATE
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            user_id: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'users',
                    key: 'id'
                }
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('managers');
    }
};
