function  fivecounter(initial,delta)
{
  let val=initial;
  function counter(){
  	val=val+delta;
  	return val;
  }
  return counter;

}

let fivecount=fivecounter(5,5);
let anothercounter=fivecounter(18,4);


console.log( fivecount());
console.log( fivecount());
console.log( fivecount());

console.log(anothercounter());
console.log(anothercounter());
console.log(anothercounter());