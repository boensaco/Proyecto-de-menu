const mysql = require('mysql2/promise');

const DB = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Productos'
});

module.exports = DB;
