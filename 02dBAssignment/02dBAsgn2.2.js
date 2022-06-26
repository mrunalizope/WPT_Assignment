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

//Update------------------------------------------------------
itemno='5';
category='Drawing';
price='30';
itemname='Pencil';

connection.query('update item set category=?,price=?,itemname=? where itemno=?', [category,price,itemname,itemno], 
(err, res1) => {
    if (err) {
        console.log(err);  
    }  else {
        if(res1.affectedRows===0)
        {
            console.log("update failed");
        } 
        else
           console.log("update suceeded");    
       
    }
}
);