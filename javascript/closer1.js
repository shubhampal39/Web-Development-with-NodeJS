function f1()
{
	function f2()
	{
		return 5;//return because of line 11
	}
	return f2;
}

let x=f1();//here f2 is not executed .
let p=x(); //we calling above x here  //here f2 is executed from f1 


console.log(p); //is 5