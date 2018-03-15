var express = require('express');
var router = express.Router();

var routes = require('./routes/index');
var users = require('./routes/users');
var post = require('./routes/post');
var upload = require('./routes/upload');

router.use('/', routes);
router.use('/users', users);
router.use('/post', post);
router.use('/upload', upload);


module.exports = router;