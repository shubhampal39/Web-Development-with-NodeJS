const express =require('express')
const todoRoute=require("./routes/todos")

const srv=express();

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
srv.set('view engine','hbs');
//srv.set('views','views')
srv.set('views',__dirname+"/views")


srv.use('/todos',todoRoute)
srv.listen(2456)