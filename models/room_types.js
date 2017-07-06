/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var RoomTypes = sequelize.define('roomTypes', {
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
		tableName: 'room_types'
	});

    RoomTypes.associate = function (models) {
        RoomTypes.BelongsTo(models.rooms);
    };

    return RoomTypes;
};
