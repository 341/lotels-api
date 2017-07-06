/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var RoomServices = sequelize.define('roomServices', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		serviceId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'services',
				key: 'id'
			},
			field: 'service_id'
		},
		reservationId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'reservations',
				key: 'id'
			},
			field: 'reservation_id'
		},
		roomId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'rooms',
				key: 'id'
			},
			field: 'room_id'
		}
	}, {
		tableName: 'room_services',
        underscored: true
	});

    RoomServices.associate = function (models) {
        RoomServices.BelongsTo(models.service);
        RoomServices.BelongsTo(models.reservationDays);
        RoomServices.BelongsTo(models.rooms);
    };

    return RoomServices;
};
