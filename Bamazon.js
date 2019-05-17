//dependecies
var mysql = require("mysql");
var inquirer = require("inquirer");
// connection to SQL data base
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "spring2019",
  database: "BamazonDB"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("MySQL connection" + connection.threadId);
  table();
});
//showing table "items"
function table() {
  var query = connection.query(
    "SELECT * FROM items",
    function(err, res) {
      console.table(res);
    }
  );
};
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

