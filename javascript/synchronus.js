function task(done)
{
	console.log("doning some task");
	done();
}

task (function(){
	console.log("task was done")
})

console.log("we did a task");