var mysql = require('mysql');
var db_info = {
    host: 'database-1.c8z3gj6erdlp.us-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'adminadmin',
    database: 'db_test'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}
