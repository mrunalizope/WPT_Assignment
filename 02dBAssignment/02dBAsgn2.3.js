const url=" ";
let dbparams=
{
    host: 'localhost',
    user: 'mrunali',
    password: 'welcome123',
    database: 'mru',
	port:3306
}; 
const mysql = require('mysql2');
const connection=mysql.createConnection(dbparams);
console.log("DB connection Established");

//Singleselect-------------------------------------------------
 itemno ='3';  //assume this came from http request


connection.query('select * from item where itemno=?', [itemno], 
(err, rows) => {
    if (err) {
        console.log(err);  
    } else 
        
        if(rows.length>0)
        console.log(rows[0].itemname+" "+rows[0].price+" "+rows[0].category);
        }    
       
);