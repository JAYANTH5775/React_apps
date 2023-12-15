
const express = require('express');

const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql"

});

var count = 0;
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

app.get("/createemployee", (req, res) => {
    let sql = "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";

    db.query(sql, (err) => {
        if (err) {
            throw err;
        }

        res.send("EMployee table created");
    });

});

app.get("/employee1", (req, res) => {

    let post = { name: "Jake Smith", designation: "Chief Executive Officer" };

    let sql = "INSERT INTO employee SET ?";

    let query = db.query(sql, post, (err) => {

        if (err) {

            throw err;

        }


        res.send(`Employee added, ${count}`);
        count += 1
    });

});



app.get('/updateemployeee/:id', (res, req) => {
    let newName = "Updated Name";
    let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send("Post Updated");
    });
});


app.get("/deleteemployee/:id", (res, req) => {
    let sql = `DELETE FROM employee WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send("Post Deleted");
    });
});
app.listen("3000", () => {
    console.log("LISting  at  port number 3000");
});
