
const express = require('express');

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "JAYAnth@#5",
  database: "nodemysql",
});


db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

const app = express();

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/createpoststable", (req, res) => {
  let sql = "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";

  db.query(sql, (err) => {
    if (err) {
      throw err;
    }

    res.send("EMployee table created");
  });

});