var express = require('express');
var router = express.Router();
var Post = require('../schema/post');
var Response = require('../common/response');

/* ADD POST. */
router.post('/', function(req, res, next) {
 var data = new Post(req.body);
 data.save(function(err){
  if(err){
      Response.errorResponse(err,res);
  }else{
      Response.successResponse('Received!',res,{});
  }
 })
});

/* GET ALL POSTS. */
router.get('/', function(req, res, next) {
  Post.find({}, function(err, posts) {
if(err){
      Response.errorResponse(err,res);
  }else{
      Response.successResponse('Post Listing!',res,posts);
  }
  }); 
  
});


/* GET SINGLE POST BY ID */
router.get('/:id', function(req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if(err){
      Response.errorResponse(err,res);
  }else{
      Response.successResponse('Post Detail!',res,post);
  }
  });
});


/* DELETE POST BY ID */
router.delete('/:id', function(req, res, next) {
  Post.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) {
      Response.errorResponse(err,res);
    } else {
      Response.successResponse('Post deleted!',res,{});
    }
  });
});


/* UPDATE POST */
router.put('/', function(req, res, next) {
  Post.findByIdAndUpdate(req.body._id, req.body, function (err, post) {
    if (err) {
      Response.errorResponse(err,res);
    } else {
      Response.successResponse('Post updated!',res,{});
    }
  });
});

module.exports = router;