function createCouter( intial, delta)
{
	let val=intial;

	let counter =
		{
        	incr:function(){
				val+=delta;
			},
			decr:function(){
				val-=delta;
			},
			show:function()
			{
				console.log(val);
			}
		}		
		return counter;
}

let a=createCouter(50,5);
a.show();
a.incr();
a.incr();
a.show();

console.log(typeof a)  //object
console.log(typeof a.show)  //function
console.log(typeof a.show())  //undefined