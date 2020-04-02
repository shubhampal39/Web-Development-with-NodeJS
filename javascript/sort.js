let  arr=[6,3,6,3,5,20,50,20,4,8,9,7,1,2,0]
console.log(arr.sort())
//javascript by default does a lexicographical

function comapre(a,b)
{
	return a-b;
	//return b-a;
}

let sortedArr=arr.sort(comapre);

console.log(sortedArr);