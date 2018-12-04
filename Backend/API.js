var express = require('express');
var app = express();
var mysql = require("mysql");   //database connection


//SQL Connection to database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "localhost",
    database: "mealtable"
});

//Initialize connection
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to mealtable");
});

//URI to API
app.get('/api/:meal', function (req, res) {
    res.locals.connection.query('SELECT * from users', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    res.send('Hello World!');
});

//Listen on port 3000
app.listen(3000, function (req, res) {
    //console.log(os.release()); // 'darwin');
    console.log("Listening on Port 3000")
});
