/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ReservationDays', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		start: {
			type: DataTypes.DATE,
			allowNull: true
		},
		end: {
			type: DataTypes.DATE,
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		reservation_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Reservations',
				key: 'id'
			}
		}
	}, {
		tableName: 'ReservationDays'
	});
};
