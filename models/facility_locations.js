/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var FacilityLocation = sequelize.define('facility_locations', {
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
		locations: {
			type: DataTypes.ENUM('1','2'),
			allowNull: true,
			unique: true
		},
		description: {
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
		tableName: 'facility_locations'
	});

    // FacilityLocation.associate = function (models) {
    //     FacilityLocation.belongsTo(models.Rooms);
    // };

    return FacilityLocation;
};
