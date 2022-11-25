const { sequelize, DataTypes } = require('../database/database');
const Image = require('./Image.model');

const Ad = sequelize.define('ad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.TEXT },
    price: { type: DataTypes.FLOAT },
    status: { type: DataTypes.TINYINT },
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' }
}, {
    timestamps: true,
    underscored: true
});

Ad.hasMany(Image, {
    foreignKey: 'id_ad',
    onDelete: 'CASCADE'
});

module.exports = Ad;