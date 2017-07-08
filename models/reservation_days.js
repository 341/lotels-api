/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var reservationDays = sequelize.define('reservation_days', {
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
		}
	}, {
		tableName: 'reservation_days'
	});

    // reservationDays.associate = function (models) {
    //     reservationDays.belongsTo(models.Reservations);
    // };

    return reservationDays;
};
