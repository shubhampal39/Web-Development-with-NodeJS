console.log(this)
function fun(){
	console.log(global==this)
}

fun(); //true //referes to global so true
new fun(); //false  //not refers to global
