const express=require("express");
const bodyParser=require("body-parser");
const mysqlconn=require("./connection");
const PeopleRoutes=require("./routes/person");


var app=express();

app.use(bodyParser.json());

app.use("/",PeopleRoutes);
app.use("/",PeopleRoutes);
app.use("/",PeopleRoutes)



app.listen(8086);