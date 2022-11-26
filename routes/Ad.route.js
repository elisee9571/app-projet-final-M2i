const express = require('express');
const auth = require('../middleware/auth');
const adController = require('../controller/adController');
const router = express.Router();

router.get('/', adController.find);
router.get('/:id', adController.findById);
router.post('/', auth, adController.create);
router.put('/:id', auth, adController.update);
router.delete('/:id', auth, adController.delete);

module.exports = router;