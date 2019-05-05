const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
app.use(express.static(__dirname + '/components'));

router.get('/',function(req,res){
    res.sendFile(__dirname + '/autoComplete/autoComplete.html');
});
app.listen(3000, function() {
    console.log("Server running on port 3000");
});