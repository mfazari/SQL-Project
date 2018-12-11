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
    console.log("Connected to Database mealtable");
});

//URI to API
var i;
var days = ["Monday", "Tuesday", "Wednesday", "Thursdays", "Friday"];

//Monday 1
app.get("/Monday/1", function(req, res){
    var statement = 'SELECT Description FROM '+ "Monday" + ' WHERE Primary_Number = ' + 1 + ';';
    con.query(statement, function (error, results) {
        if (error) throw error;
        res.send(results);
    })
});

//Monday 2
app.get("/Monday/2", function(req, res){
    var statement = 'SELECT Description FROM '+ "Monday" + ' WHERE Primary_Number = ' + 2 + ';';
    con.query(statement, function (error, results) {
        if (error) throw error;
        res.send(results);
    })
});

//Tuesday 1
app.get("/Tuesday/1", function(req, res){
    var statement = 'SELECT Description FROM '+ "Tuesday" + ' WHERE Primary_Number = ' + 1 + ';';
    con.query(statement, function (error, results) {
        if (error) throw error;
        res.send(results);
    })
});

//Tuesday 2
app.get("/Tuesday/2", function(req, res){
    var statement = 'SELECT Description FROM '+ "Tuesday" + ' WHERE Primary_Number = ' + 2 + ';';
    con.query(statement, function (error, results) {
        if (error) throw error;
        res.send(results);
    })
});


//Wednesday 1
app.get("/Wednesday/1", function(req, res){
    var statement = 'SELECT Description FROM '+ "Wednesday" + ' WHERE Primary_Number = ' + 1 + ';';
    con.query(statement, function (error, results) {
        if (error) throw error;
        res.send(results);
    })
});

//Wednesday 2
app.get("/Wednesday/2", function(req, res){
    var statement = 'SELECT Description FROM '+ "Wednesday" + ' WHERE Primary_Number = ' + 2 + ';';
    con.query(statement, function (error, results) {
        if (error) throw error;
        res.send(results);
    })
});

//Thursday 1
app.get("/Thursday/1", function(req, res){
    var statement = 'SELECT Description FROM '+ "Thursday" + ' WHERE Primary_Number = ' + 1 + ';';
    con.query(statement, function (error, results) {
        if (error) throw error;
        res.send(results);
    })
});

//Thursday 2
app.get("/Thursday/2", function(req, res){
    var statement = 'SELECT Description FROM '+ "Thursday" + ' WHERE Primary_Number = ' + 2 + ';';
    con.query(statement, function (error, results) {
        if (error) throw error;
        res.send(results);
    })
});


//Friday 1
app.get("/Friday/1", function(req, res){
    var statement = 'SELECT Description FROM '+ "Friday" + ' WHERE Primary_Number = ' + 1 + ';';
    con.query(statement, function (error, results) {
        if (error) throw error;
        res.send(results);
    })
});

//Friday 2
app.get("/Friday/2", function(req, res){
    var statement = 'SELECT Description FROM '+ "Friday" + ' WHERE Primary_Number = ' + 2 + ';';
    con.query(statement, function (error, results) {
        if (error) throw error;
        res.send(results);
    })
});




//Listen on port 3000
app.listen(3000, function (req, res) {
    //console.log(os.release()); // 'darwin');
    console.log("Listening on Port 3000")
});
