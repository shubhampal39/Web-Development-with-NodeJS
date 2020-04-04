$(function(){

	let newTodoBox=$('#newtodo')
	let addtodoBtn=$('#addtodo')
	let todolist=$('#todolist')

	addtodoBtn.click(function(){
		//console.log("Button was clicked")
		let newTodo=newTodoBox.val()
		//console.log(newTodo)

			$.post(
				'/todos/',
				{task:newTodo},
				function(data){
					//console.log(data);
					todolist.empty();
					for(todo of data)
					{
						todolist.append("<li>"+todo.task+"</li>");
					}
				})

	})
})