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
var i;
var days = ["Monday", "Tuesday", "Wednesday", "Thursdays", "Friday"];
for(i = 0; i < days.length; i++) {
    var day = days[i];
    var menu_number;
    for(menu_number=1; menu_number < 3; menu_number++) {
        var get = '/' + days[i] + '/' + menu_number;
        var statement = 'SELECT Description FROM '+ days[i] + ' WHERE Primary_Number = ' + menu_number + ';';
        app.get(get, function (req, res) {
            con.query(statement, function (error, results) {
                if (error) throw error;
                res.send(JSON.stringify(results));
            })
            // res.send('Hello World!');
        });
    }
}




//Listen on port 3000
app.listen(3000, function (req, res) {
    //console.log(os.release()); // 'darwin');
    console.log("Listening on Port 3000")
});
