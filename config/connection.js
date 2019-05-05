//Ports & Heroku
var PORT = 8080;
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "webuser",
    password: "Pa55w0rd",
    database: "burgers_db"
});

//Connection
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id' + connection.threadId); 
});

//Export
module.exports = connection;