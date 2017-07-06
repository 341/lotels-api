/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rooms', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		roomId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'rooms',
				key: 'id'
			},
			field: 'room_id'
		},
		typeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'room_types',
				key: 'id'
			},
			field: 'type_id'
		},
		locationId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'facility_locations',
				key: 'id'
			},
			field: 'location_id'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'users',
				key: 'id'
			},
			field: 'user_id'
		}
	}, {
		tableName: 'rooms'
	});
};
