const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('proyecto', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(400),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}