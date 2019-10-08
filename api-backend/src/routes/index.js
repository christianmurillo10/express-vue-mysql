var express = require('express');
var router = express.Router();

router.use('/user', require('./users'));
router.use('/role', require('./roles'));

module.exports = router;
