let p={
	a:10
}

let q=Object.create(p)
q.b=20;

let r=Object.create(q);
r.c=30;
p.c=30;


console.log(p)
console.log(q)
console.log(r)

console.log(p.a)
console.log(q.a)
console.log(r.a)
console.log(r.__proto__==q)