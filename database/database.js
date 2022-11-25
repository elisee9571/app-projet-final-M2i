const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // sequelize.query("insert into user (email, password) values ('test', 'password');");
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// sequelize.sync({ force: true });

// Ad.hasOne(Rate, { foreignKey: 'id_ad' });
// Ad.hasMany(Offer, { foreignKey: 'id_ad' });
// Ad.hasOne(Order, { foreignKey: 'id_ad' });
// Ad.belongsToMany(Category, { through: 'ad_category' });
// Category.belongsToMany(Ad, { through: 'ad_category' });
// Offer.belongsTo(User);
// Offer.belongsTo(Ad);
// Order.belongsTo(Ad);
// Order.belongsTo(User);
// Rate.belongsTo(User);
// Rate.belongsTo(Ad);
// User.hasMany(Rate, { foreignKey: 'id_user' });
// User.hasMany(Offer, { foreignKey: 'id_user' });
// User.hasMany(Order, { foreignKey: 'id_user' });

module.exports = { sequelize, DataTypes };