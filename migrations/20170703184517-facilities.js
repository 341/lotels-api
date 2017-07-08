'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Facilities', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                unique: true
            },
            description: {
                type: Sequelize.STRING
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
                onDelete: 'cascade',
                allowNull: true,
                references: {
                    model: 'FacilityTypes',
                    key: 'id'
                }
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Facilities');
    }
};
