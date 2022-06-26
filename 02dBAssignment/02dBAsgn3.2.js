const url = ""
let paramters =
{
    host: 'localhost',
    user: 'mrunali',
    password: 'welcome123',
    database: 'mru',
    port: 3306
};

const mysql = require("mysql2");
const connection = mysql.createConnection(paramters);
console.log("DB connection Established");

let resourcename = "marketing"

connection.query('update resource set resourcename=?', [resourcename],
    (err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res.affectedRows);
        }

    });
