const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('usuario', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}