function person(name,age)
{
	this.firstname=name.split(" ")[0]
	this.laastname=name.split(" ")[1]
	this.age=age 
	this.isAdult=function(){return age>18}
}

let p=new person("john smith",30)

let h=new person("john smith",12)
console.log(p)
console.log(p.isAdult())

console.log(h.isAdult())
//console.log(age);
