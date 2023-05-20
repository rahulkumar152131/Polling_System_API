const express = require('express');
const router = express.Router();

console.log('Router loaded');

router.get('/' , function(req, res){
    res.render('index');
})

router.use('/api', require('./api'));


module.exports = router;