const mysql = require('mysql');

let DBConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'Quanlynhanvien'
});
module.exports = DBConnection;