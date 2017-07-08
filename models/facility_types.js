/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var FacilityTypes = sequelize.define('facility_types', {
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

    // FacilityTypes.associate = function (models) {
    //     FacilityTypes.belongsToMany(models.Facilities);
    // };

    return FacilityTypes;
};
