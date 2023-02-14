const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('curso', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(10000),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}