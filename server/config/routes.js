const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', function(req, res){
    res.render(path.join(__dirname, '../../components/autoComplete/autoComplete.html'));
});

router.post('/search',function(req,res){
    console.log("it works");
});

router.post('/autoComplete',function(req,res){
    console.log("autoComplete");
});
module.exports = router;