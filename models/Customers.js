/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customers', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		streetAddress: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'street_address'
		},
		city: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'city'
		},
		zipCode: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'zip_code'
		},
		country: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'country'
		},
		birthday: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'birthday'
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
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Users',
				key: 'id'
			},
			field: 'user_id'
		}
	}, {
		tableName: 'Customers'
	});
};
