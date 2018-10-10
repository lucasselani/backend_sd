var mysql = require('mysql');

var con = {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'ec021',
    insecureAuth: true
}

module.exports = {
    getConnection: function() {
        var connection = mysql.createConnection(con);
        connection.connect();
        return connection;
    }
}