var TodoList = function() {
  this.tasks = []
};

var Task = function(content, list) {
  this.id = Task.counter++;
  this.content = content;
  this.completed = false;
  this.list = list
}
Task.counter = 0;

TodoList.prototype.add = function(content) {
	var task = new Task(content, this);
  this.tasks.push(task);
}

TodoList.prototype.list = function() {
  for (var i in this.tasks) {
    // if (this.tasks[i].completed == true) {
    //   console.log("[x] " + this.tasks[i].content);
    // } else {
    //   console.log("[ ] " + this.tasks[i].content);
    // }
    console.log(this.tasks[i])
  }
}



TodoList.prototype.remove = function(content) {
  // var index = null;
  // var todoList = this;
  // todoList.tasks.forEach(function(element){
  //   if (element.content === task) {
  //     index = todoList.tasks.indexOf(element);
  //   };
  // });

  for (var i = 0; i < this.tasks.length; i++) { 
  var task = this.tasks[i];
    if (task.content === content){
      this.tasks.splice(i, 1);
      return;
    }
  }

  // this.redoId();
}

TodoList.prototype.complete = function(content) {
  // var index = null;
  // var self = this;
  // self.tasks.forEach(function(element){
  //   if (element.content === task) {
  //     index = self.tasks.indexOf(element);
  //   };
  // });


  // this.tasks[index].completed = true

  for (var i = 0; i < this.tasks.length; i++) { 
  var task = this.tasks[i];
    if (task.content === content){
      task.complete();
      return;
    }
  }
}


Task.prototype.complete = function(){
	this.completed = true;
}

Task.prototype.remove = function() {
	this.list.remove(this.content)
}



// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();

groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

console.log()

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
breadTask.remove();

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

