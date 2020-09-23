let arr=[1,2,3]
let arr2=[1,'hello',false,[2,3]]
for(let i=0;i<arr2.length;i++)
{
	console.log(arr2[i]);

}

for(let val of arr2)
{
	console.log(val);
}



for(let index in arr2)
{
	console.log(arr2[index]);
}

arr.push(4);//push from end
arr.pop();//pop from end
console.log(arr);
arr.shift();//remove from front
arr.unshift('kiwi');//add front  

console.log(arr.slice(4,6));
console.log(arr.splice(4,2));
//replice items using splice
arr.splice(0,3,3,4,5);

console.log(arr.concat('sa','re'))//not orignal array changed
