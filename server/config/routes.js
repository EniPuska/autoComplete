const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', function(req, res){
    res.render(path.join(__dirname, '../../components/autoComplete/autoComplete.html'));
});

module.exports = router;