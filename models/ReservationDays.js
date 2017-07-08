/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reservationDays', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		start: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'start'
		},
		end: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'end'
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
		reservationId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Reservations',
				key: 'id'
			},
			field: 'reservation_id'
		}
	}, {
		tableName: 'ReservationDays'
	});
};
