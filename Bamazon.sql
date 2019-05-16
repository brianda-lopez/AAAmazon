DROP DATABASE IF EXISTS BamazonDB;

CREATE DATABASE BamazonDB;

USE BamazonDB;


CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR (45) NULL,
  price_customer FLOAT (11),
  stock_quantity INTEGER (11),
  PRIMARY KEY (id)
);

SELECT * from BamazonDB;
