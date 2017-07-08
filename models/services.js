/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('services', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		price: {
			type: DataTypes.STRING(255),
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
		tableName: 'services'
	});
};
