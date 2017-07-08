/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var Customers = sequelize.define('customers', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        treet_address: {
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
			allowNull: false
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
		tableName: 'customers'
	});

    // Customers.associate = function (models) {
    //     Customers.belongsTo(models.Users,{
    //         onDelete: "CASCADE",
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Customers;
};
