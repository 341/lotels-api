/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Reservations', {
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
		},
		employee_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Employees',
				key: 'id'
			}
		},
		customer_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Customers',
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
		tableName: 'Reservations'
	});
};
