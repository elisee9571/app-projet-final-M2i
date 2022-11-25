const { sequelize, DataTypes } = require('../database/database');
const Ad = require('./Ad.model');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    biography: { type: DataTypes.TEXT },
    phone: { type: DataTypes.STRING, unique: true },
    address: { type: DataTypes.STRING },
    additional_address: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    zipCode: { type: DataTypes.STRING },
    role: { type: DataTypes.JSON },
    avatar: { type: DataTypes.STRING },
    status: { type: DataTypes.TINYINT },
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' }
}, {
    timestamps: true,
    underscored: true
});

User.hasMany(Ad, { foreignKey: 'id_user' });

module.exports = User;