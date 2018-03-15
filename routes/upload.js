var express = require('express');
var router = express.Router();

// file
const multer = require('multer')
const fileType = require('file-type')
const fs = require('fs')
// end file

const upload = multer({
    dest:'public/images/', 
    limits: {fileSize: 10000000, files: 1},
    fileFilter:  (req, file, callback) => {
    
        if (!file.originalname.match(/\.(jpg|jpeg)$/)) {

            return callback(new Error('Only Images are allowed !'), false)
        }

        callback(null, true);
    }
}).single('image')


router.post('/images/upload', (req, res) => {
    
        upload(req, res, function (err) {
    
            if (err) {
    
                res.status(400).json({message: err.message})
    
            } else {
    
                let path = `/images/${req.file.filename}`
                res.status(200).json({message: 'Image Uploaded Successfully !', path: path})
            }
        })
    })

    module.exports = router;