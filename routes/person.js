const e = require("express");
const express=require("express");

const Router=express.Router();
const mysqlconn=require("../connection");


Router.get("/test1",(req,res)=>{
    const limit=2;
    const page=req.query.page;
    

    const offset = (page-1) * limit;
    mysqlconn.query("select * from tb_user limit "+limit+"  OFFSET 0 " ,(err,rows,field)=>{
        if(!err){
            var jsonResult={
                'products_page_count':rows.length,
                'page_number':page,
                'products':rows
            };
            //console.log(page);
            var myjsonString=
                JSON.parse(JSON.stringify(jsonResult));
                res.statusMessage="salvi for page "+page;
                res.statusCode=200;
                res.json(myjsonString);
                res.end();
            
        }
        else{
            console.log(err);
        }
    });
    });


Router.get("/test2",(req,res)=>{
    mysqlconn.query("select * from tb_user where user_id=1 or user_id=5 or user_id=7 ",(err,rows,field)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });
    });

Router.get("/test3",(req,res)=>{

    mysqlconn.query("select tb_user.user_id,tb_user.admin_id,tb_user.user_name,tb_admin.is_active,tb_admin.admin_name,tb_user.created_at from tb_user JOIN tb_admin ON tb_user.admin_id=tb_admin.admin_id ",(err,rows,field)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });

   
  
  
});




module.exports=Router;