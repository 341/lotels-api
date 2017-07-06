/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var Facilities = sequelize.define('facilities', {
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
		typeId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'facility_types',
				key: 'id'
			},
			field: 'type_id'
		}
	}, {
        underscored: true,
		tableName: 'facilities'
	});

    Facilities.associate = function (models) {
        Facilities.hasMany(models.rooms);
        Facilities.hasMany(models.customers);
        Facilities.hasMany(models.admins);
        Facilities.hasMany(models.employees);
        Facilities.hasMany(models.managers);
        Facilities.hasOne(models.FacilityTypes);
    };

    return Facilities;
};
