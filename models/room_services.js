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
		serviceId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'services',
				key: 'id'
			},
			field: 'service_id'
		},
		rsId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'reservations',
				key: 'id'
			},
			field: 'rs_id'
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
		tableName: 'room_services'
	});
};
