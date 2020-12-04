const mysql=require("mysql");

var mysqlconn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs",
    multipleStatements:true
});

mysqlconn.connect((err)=>{
   if(!err){
    console.log("connection is successfull");
      
   }
   else{
       console.log("connection is failed");
   }
});

module.exports=mysqlconn;