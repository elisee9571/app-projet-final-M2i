const { sequelize, DataTypes } = require('../database/database');

const Image = sequelize.define('image', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: { type: DataTypes.STRING }
}, {
    timestamps: false
});

module.exports = Image;