'use strict';
module.exports = function(sequelize, DataTypes) {
  var Hotel = sequelize.define('hotel', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      // associate: function(models) {
      //     Hotel.belongsToMany(models.User);
      // }
    }
  });
  return hotel;
};