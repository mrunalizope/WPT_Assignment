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
let status =true;


connection.query('select * from resource where status =?', [status], 
(err, rows) => {
    if (err) {
        console.log(err);  
    } else 
        
        if(rows.length>0){
        for(let i=0;i<rows.length;i++){
            console.log(rows[i]);
        }  
    }  
       
    
    }
);