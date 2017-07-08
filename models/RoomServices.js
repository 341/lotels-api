/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('roomServices', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'created_at'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'updated_at'
		},
		serviceId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Services',
				key: 'id'
			},
			field: 'service_id'
		},
		reservationId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Reservations',
				key: 'id'
			},
			field: 'reservation_id'
		},
		roomId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Rooms',
				key: 'id'
			},
			field: 'room_id'
		}
	}, {
		tableName: 'RoomServices'
	});
};
