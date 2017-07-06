/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hotels', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true,
			field: 'name'
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
		email: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'email'
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
		}
	}, {
		tableName: 'hotels'
	});
};
