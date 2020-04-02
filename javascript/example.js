function f1()
{
	function f2()
	{
		return 5;//return because of line 11
	}
	return f2;
}

let x=f1();
let p=l();
console.log(p); //is 5