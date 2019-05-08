var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'test',
    password : 'test',
    database : 'autocomplete'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = connection;