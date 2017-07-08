/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('services', {
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
		description: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'description'
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'type'
		},
		price: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'price'
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
		tableName: 'Services'
	});
};
