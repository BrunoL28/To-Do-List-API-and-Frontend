const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host: "locahost",
    user: "root",
    password: "root",
    database: "todolist"
});

module.exports = connection;