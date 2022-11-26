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
    console.log('Database connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// sequelize.sync({ force: true });

// Ad.belongsToMany(Category, { through: 'ad_category' });
// Category.belongsToMany(Ad, { through: 'ad_category' });


module.exports = { sequelize, DataTypes };