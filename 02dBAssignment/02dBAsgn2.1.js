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

//Insert------------------------------------------------------
let itemno ='6';  
let itemname ='Ruler';  
let price ='25';  
let category ='Measurement';

connection.query('insert into item(itemno,itemname,price,category) values (?,?,?,?)', [itemno,itemname,price,category], 
(err, res1) => {
    if (err) {
        console.log(err);  
    } else {
        console.log(res1.affectedRows)     
       
    }
}
);



