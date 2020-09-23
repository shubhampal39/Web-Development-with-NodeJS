//object Oriented Programming in Javascript
//allow 
var bird={

   x:100,
   y:200,
   color:"blue",
   eggs:[1,2,3,4],	
   arr:["One","Second"],
   fly:function(){
   	console.log("fly called",this.x);
   }
}

bird.arr.forEach(function(idx,val){
	console.log(idx,val)
})

//create opject 
function fruit(taste,color){
   this.taste="sweet";
   this.color="red";
}
//create object in another way

var apple={
	taste:"sweet",
	color:"red",
}
// creating  
let mango =new fruit("sweet","yellow");
let orange=new fruit("sour","orange");

//another way to create object
class Fruit{
	constructor(taste,color){
		this.taste=taste;
		this.color=color;
	}
}

let kiwi=new Fruit("soar","green");



let Fruitclass=class{
	constructor(taste,color){
		this.taste=taste;
		this.color=color;
	}
}

let kiwi2=new Fruitclass("soar","green");