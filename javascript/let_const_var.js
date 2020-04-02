//let value changes throughout the block 
function abc(){
var c=10;
let a=100;  //first a
	if(true)
	{
       let  a=1;//second a	  
	   	 var c=1000;
	   	 console.log(a);
	   	 console.log(c);
	   
	}  
	console.log(a);//value a taken from first a
	console.log(c);

}

abc();


const a=10;
//uncomment below a then it show error becouse const value cannot be Re-initialized
//a=11;