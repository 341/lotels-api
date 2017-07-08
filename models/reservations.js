/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var Reservations = sequelize.define('reservations', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		start: {
			type: DataTypes.DATE,
			allowNull: false
		},
		end: {
			type: DataTypes.DATE,
			allowNull: false
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
		tableName: 'reservations'
	});

	return Reservations;
};
