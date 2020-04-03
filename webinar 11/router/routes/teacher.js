const express=require('express')
const Router=express.Router
const route=Router();
 
let teachers=[
 {name:"Arnav",subject:"Web Dev"},
 {name:"Pratik",subject:"launchpad"}
]

route.get('/',(req,res)=>res.send(teachers))

route.get('/add',(req,res)=>{
	teachers.push({
		name:req.query.name,
		subject:req.query.subject

	})
	res.send(teachers);	

})

route.get('/:id',(req,res)=>res.send(teachers[req.params.id]))



module.exports=route

