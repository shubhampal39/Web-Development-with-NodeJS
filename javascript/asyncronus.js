function task(done)
{
	console.log("doning some task");
	setTimeout(done,1000);
}

task (function(){
	console.log("task was done")
})


console.log("we did a task");