function person(name,age)
{
	this.firstname=name.split(" ")[0]
	this.laastname=name.split(" ")[1]
	this.age=age
	this.isAdult=function(){return age>18}
}

let p=new person("john smith",30)
console.log(p)
console.log(p.isAdult())
