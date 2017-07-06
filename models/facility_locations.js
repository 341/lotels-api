/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    var FacilityLocation = sequelize.define('facilityLocations', {
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
            locations: {
                type: DataTypes.ENUM('1', '2'),
                allowNull: true,
                unique: true,
                field: 'locations'
            },
            description: {
                type: DataTypes.STRING(255),
                allowNull: true,
                field: 'description'
            }
        },
        {
            tableName: 'facility_locations',
            underscored: true
        });


    return FacilityLocation;
};
