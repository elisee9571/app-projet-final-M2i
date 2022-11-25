// const { sequelize, DataTypes } = require('../database/database');
// const Ad = require('./Ad.model');
// const User = require('./User.model');

// const Rate = sequelize.define('rate', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     rate_value: { type: DataTypes.STRING },
//     comment: { type: DataTypes.TEXT },
//     createdAt: { type: DataTypes.DATE, field: 'created_at' },
//     updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
//     id_ad: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Ad,
//             key: 'id'
//         }
//     }
// }, {
//     timestamps: true,
//     underscored: true
// });

// module.exports = Rate;