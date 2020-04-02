let arr=[1,2,3,4,5,6,7,8]

let arr2=arr.map(function (item){
	return item*item
})
let arr3=arr.map(Math.sqrt)
{
	console.log(arr3)
}

console.log(arr2)
console.log(arr3)