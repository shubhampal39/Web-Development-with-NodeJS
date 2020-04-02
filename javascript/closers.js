function createCouter( intial, delta)
{
	let val=intial;
	function counter()
		{
			val=val+delta;
			return val;
    
		}
		return counter;
}


let fiveCount=createCouter(5,5);
let anotherCounter=createCouter(18,4);
console.log(fiveCount());
console.log(fiveCount());
console.log(fiveCount());

console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());