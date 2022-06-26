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

//Multiselect-------------------------------------------------
category ='Measurement';  


connection.query('select * from item where category =?', [category], 
(err, rows) => {
    if (err) {
        console.log(err);  
    } else 
        
        if(rows.length>0){
        for(let i=0;i<rows.length;i++){
        console.log(rows[i].itemname+" "+rows[i].price);
        }  
    }  
       
    
    }
);