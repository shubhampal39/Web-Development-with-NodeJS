let obj={
	aNumber:123,
	astring:"shubham",
	afunction:function(){
		return (this.aNumber+this.astring)
	}
}
console.log(obj.afunction())