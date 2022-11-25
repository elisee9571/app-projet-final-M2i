const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split('')[1];
        const decodeToken = jwt.decode(token, "SECRET_TOKEN_KEY");
        const userId = decodeToken.userId;

        req.auth = { userId: userId };

    } catch (error) {
        res.status(401).json({ error });
    }
};