'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('FacilityTypes', {
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
            // created_at: {
            //     allowNull: false,
            //     type: Sequelize.DATE
            // },
            // updated_at: {
            //     allowNull: false,
            //     type: Sequelize.DATE
            // },
        },{
            timestamps: true
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('FacilityTypes');
    }
};
