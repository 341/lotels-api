/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var facilityTypes = sequelize.define('facilityTypes', {
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
		tableName: 'facility_types',
        underscored: true
	});

    facilityTypes.associate = function (models) {
        facilityTypes.belongsToMany(models.facilities);
    };

    return facilityTypes;
};
