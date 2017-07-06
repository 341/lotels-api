/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reservations', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		start: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'start'
		},
		end: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'end'
		},
		employeeId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'employees',
				key: 'id'
			},
			field: 'employee_id'
		},
		customerId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'customers',
				key: 'id'
			},
			field: 'customer_id'
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
		tableName: 'reservations'
	});
};
