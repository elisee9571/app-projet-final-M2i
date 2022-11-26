const jwt = require('jsonwebtoken');
const session = require("express-session");

const User = require('../model/User.model');

module.exports = (req, res, next) => {
    try {
        const token = req.session.token;
        const decodeToken = jwt.decode(token, "SECRET_TOKEN_KEY");
        const userId = decodeToken.userId;
        const user = User.findOne({
            where: {
                id: userId
            }
        });

        if (!user) throw new Error();

        req.auth = { userId };
        next();

    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};