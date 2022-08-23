var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller')


/*
 * To register a user's email
 *  */
router.post('/', controller.register);

module.exports = router;
