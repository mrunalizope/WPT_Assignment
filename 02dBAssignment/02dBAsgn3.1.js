const url = "";

let parameters = {

    host: 'localhost',
    user: 'mrunali',
    password: 'welcome123',
    database: 'mru',
    port: 3306
};

const mysql = require("mysql2");
const connection = mysql.createConnection(parameters);
console.log("DB connection Established");

let resource_id = 1;
let resourcename = 'accounts';
let status = true;

connection.query('insert into resource (resource_id,resourcename,status) values(?,?,?)',
    [resource_id, resourcename, status],
    (err, res1) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res1.affectedRows)

        }
    }


);