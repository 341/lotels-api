/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('facilityTypes', {
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
		}
	}, {
		tableName: 'facility_types'
	});
};
