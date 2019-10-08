var express = require('express');
var router = express.Router();
const authController = require('../controllers').auth;
const rolesController = require('../controllers').roles;

router.route('/').get(rolesController.findAll);
router.route('/create').post(authController.authorization, rolesController.create);
router.route('/update/:id').put(authController.authorization, rolesController.update);
router.route('/delete/:id').put(authController.authorization, rolesController.delete);
router.route('/search').post(authController.authorization, rolesController.search);
router.route('/:id').get(rolesController.findById);

module.exports = router;
