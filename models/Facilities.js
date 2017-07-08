/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('facilities', {
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
		typeId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'FacilityTypes',
				key: 'id'
			},
			field: 'type_id'
		}
	}, {
		tableName: 'Facilities'
	});
};
