var newTodoList = function() {
	this.list = []
};

newTodoList.prototype.add = function(task) {
	this.list.push(task);
}

newTodoList.prototype.tasks = function() {
	for (i in this.list) {
		console.log(this.list[i]);
	}
}

newTodoList.prototype.remove = function(task) {
	var index = this.list.indexOf(task);
	this.list.splice(index, 1);
}


// Driver code
var list = new newTodoList();

list.add('first task')
list.add('second task')
list.add('third task')
list.add('fourth task')
list.add('fifth task')

list.tasks();

list.remove('fourth task');


list.tasks();