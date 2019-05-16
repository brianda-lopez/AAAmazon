
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "spring2019",
  database: "BamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Testing connection" + connection.threadId + "\n");
  createProduct();
});

function createProduct() {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
      item_id: "001",
      product_name: "shampoo for women",
      department_name: "beauty products",
      price: 3.0,
      stock_quantity: 50
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
    }
  );


  // logs the actual query being run
  console.log(query.sql);
}

