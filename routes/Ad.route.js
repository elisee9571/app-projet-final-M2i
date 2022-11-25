const express = require('express');
const adController = require('../controller/adController');

const router = express.Router();

router.post('/', adController.create);
router.get('/', adController.find);
router.get('/:id', adController.findById);
router.put('/:id', adController.update);

module.exports = router;