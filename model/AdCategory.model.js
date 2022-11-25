// const { sequelize, DataTypes } = require('../database/database');
// const Ad = require('./Ad.model');
// const Category = require('./Category.model');

// const AdCategory = sequelize.define('ad_category', {
//     id_ad: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Ad,
//             key: 'id'
//         }
//     },
//     id_category: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Category,
//             key: 'id'
//         }
//     }
// });

// Ad.belongsToMany(Category, { through: 'ad_category' });
// Category.belongsToMany(Ad, { through: 'ad_category' });

// module.exports = AdCategory;