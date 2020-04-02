const express=require('express')
const server=express();
server.get('/',function(req,res,next){
	console.log("shubham");
	res.send("hello world");
})

server.get('/greet/:tod/:name',function(req,res,next){
	let tod="morning";
	switch(req.params.tod)
	{
		case "morning":tod="morning";break;
		case "evening" :tod="evening";break;
	}

	let greeting ="Good,"+tod+" "+req.params.name
	res.send(greeting)
})

server.listen(9876);