/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var Rooms =  sequelize.define('rooms', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
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
		tableName: 'rooms'
	});

    // Rooms.associations = function (models) {
    //     Rooms.belongsTo(models.Facilties);
    // }

    return Rooms;
};
