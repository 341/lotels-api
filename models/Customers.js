/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Customers', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		street_address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		zip_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		birthday: {
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
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Users',
				key: 'id'
			}
		}
	}, {
		tableName: 'Customers'
	});
};
