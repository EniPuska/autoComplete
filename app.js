const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routes = require('./server/config/routes');
app.use('/',routes);

app.use(express.static(__dirname + '/components'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.listen(3000, function() {
    console.log("Server running on port 3000");
});

