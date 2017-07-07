'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('RoomTypes', {
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
          }
      });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('RoomTypes');
  }
};
