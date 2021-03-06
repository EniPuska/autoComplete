const express = require('express');
const router = express.Router();
const path = require('path');
const mysql = require('./database');
router.get('/', function(req, res){
    res.render(path.join(__dirname, '../../components/autoComplete/autoComplete.html'));
});

router.post('/autoComplete',function(req,res){
    mysql.query("SELECT name from countries WHERE name LIKE '%"+req.body.input+"%'", function (error, results) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
module.exports = router;