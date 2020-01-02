var express = require('express');
var router = express.Router();

router.use('/role', require('./roles'));
router.use('/user', require('./users'));

module.exports = router;
