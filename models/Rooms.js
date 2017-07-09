/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Rooms', {
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
		},
		type_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'RoomTypes',
				key: 'id'
			}
		},
		location_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'FacilityLocations',
				key: 'id'
			}
		},
		facility_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Facilities',
				key: 'id'
			}
		}
	}, {
		tableName: 'Rooms'
	});
};
