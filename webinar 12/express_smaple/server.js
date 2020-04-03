const express=require('express')
const srv=express();
const todoRoute=require('./routes/todos')

srv.get('/hello',function(req,res){
	res.send("Hello")
})


srv.use('/public',express.static(__dirname+"/public"))
srv.listen(4567);