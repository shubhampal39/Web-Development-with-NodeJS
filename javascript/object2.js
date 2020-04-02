function fruit(color,taste)
{
	this.color=color;
	this.taste=taste;
}

let orange=new fruit("oragne","sour")

let apple=new fruit("red","sweet")

let mango={
	color:"yellow" , taste:"sweet"
}

console.log(orange)
console.log(apple);
console.log(mango);
