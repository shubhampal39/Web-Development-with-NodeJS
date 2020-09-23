let a=10;
	console.log(a);
	let b=[1,2,3,4,5];
	console.log(b);
	console.log("Hello World");

	//javascript
	c=10;   //global Function
	var d=30; //Function Scope
	let e=50;  //block scope


function f(){
	let a=5;
	if(a==5)
	{
		let b=10;
		console.log("Inside",b);
	}

	console.log("Outside",b)
}

function fun(){
	let a=5;
	if(a==5)
	{
		let f=10;
		console.log("Inside",f);
	}

	console.log("Outside",f)
}


function fun1(){
	let a=5;
	if(a==5)
	{
		var fz=10; //work within function only
		console.log("Inside",fz);
	}

	console.log("Outside",fz)
}

function square_root(n){
	console.log(Math.sqrt(n));
	return "Hello";
}

//sqrt_n(10);//not work

var sqrt_n=function(){
	console.log("In second fun");
}

sqrt_n(10);// works fine

let arr=['Apple',"Mango","Guava"];
console.log(arr);
arr.push("Banana");
arr.pop();
arr.shift();
arr.unshift("Kiwi");
arr.indexOf("Kiwi");

