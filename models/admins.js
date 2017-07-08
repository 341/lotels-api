/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    var Admins = sequelize.define('Admins', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        street_address: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        zip_code: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        country: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        birthday: {
            type: DataTypes.DATE,
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
        tableName: 'Admins'
    });

    // Admins.associate = function (models) {
    //     Admins.belongsTo(models.Users,{
    //         onDelete: "CASCADE",
    //         foreignKey: 'user_id'
    //     });
    // };

    return Admins;
};
