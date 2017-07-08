/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var RoomServices = sequelize.define('room_services', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'room_services'
	});

    // RoomServices.associate = function (models) {
    //     RoomServices.belongsTo(models.Rooms);
    //     RoomServices.belongsTo(models.Services);
    //     RoomServices.belongsTo(models.Reservations);
    // };

    return RoomServices;
};
