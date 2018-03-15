var express = require('express');
var router = express.Router();

var routes = require('./routes/index');
var users = require('./routes/users');
var post = require('./routes/post');

router.use('/', routes);
router.use('/users', users);
router.use('/post', post);


module.exports = router;