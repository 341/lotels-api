/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RoomServices', {
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
		},
		service_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Services',
				key: 'id'
			}
		},
		reservation_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Reservations',
				key: 'id'
			}
		},
		room_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Rooms',
				key: 'id'
			}
		}
	}, {
		tableName: 'RoomServices'
	});
};
