/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var Facilities = sequelize.define('Facilities', {
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
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'facilities'
	});

    // Faciliteis.associate = function (models) {
    //     Faciliteis.belongsTo(models.FacilityTypes);
    //     Faciliteis.hasMany(models.Rooms);
    // };

    return Facilities;

};
