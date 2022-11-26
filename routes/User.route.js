const express = require('express');
const auth = require('../middleware/auth');
const userController = require('../controller/userController');

const router = express.Router();

router.get('/', userController.find);
router.get('/:id', userController.findById);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', auth, userController.logout);

module.exports = router;