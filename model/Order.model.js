// const { sequelize, DataTypes } = require('../database/database');
// const Ad = require('./Ad.model');
// const User = require('./User.model');

// const Order = sequelize.define('order', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     delivery_address: { type: DataTypes.STRING },
//     delivery_additional_address: { type: DataTypes.STRING },
//     city: { type: DataTypes.STRING },
//     zipCode: { type: DataTypes.STRING },
//     amout: { type: DataTypes.FLOAT },
//     status: { type: DataTypes.TINYINT },
//     createdAt: { type: DataTypes.DATE, field: 'created_at' },
//     updatedAt: { type: DataTypes.DATE, field: 'updated_at' }
// }, {
//     timestamps: true,
//     underscored: true
// });

// module.exports = Order;