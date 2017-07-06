/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var Rooms = sequelize.define('rooms', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		typeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'room_types',
				key: 'id'
			},
			field: 'type_id'
		},
		locationId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'facility_locations',
				key: 'id'
			},
			field: 'location_id'
		},
        facilityId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'facilities',
				key: 'id'
			},
			field: 'facility_id'
		}
	}, {
		tableName: 'rooms',
        underscored: true
	});

    Rooms.associate = function (models) {
        Rooms.BelongsTo(models.facilities);
        Rooms.hasOne(models.roomTypes);
        Rooms.belongsTo(models.facilityLocations);
    };

    return Rooms;
};
