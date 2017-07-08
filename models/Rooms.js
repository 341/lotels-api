/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rooms', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
			allowNull: false,
			references: {
				model: 'RoomTypes',
				key: 'id'
			},
			field: 'type_id'
		},
		locationId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'FacilityLocations',
				key: 'id'
			},
			field: 'location_id'
		},
		facilityId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Facilities',
				key: 'id'
			},
			field: 'facility_id'
		}
	}, {
		tableName: 'Rooms'
	});
};
