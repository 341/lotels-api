'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('users', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          username: {
              type: Sequelize.STRING,
              unique: true
          },
          first_name: {
              type: Sequelize.STRING
          },
          last_name: {
              type: Sequelize.STRING
          },
          type: {
              type: Sequelize.INTEGER
          },
          status: {
              type: Sequelize.INTEGER
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
      return queryInterface.dropTable('admins');
  }
};
