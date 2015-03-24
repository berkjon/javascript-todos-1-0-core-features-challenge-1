var newTodoList = function() {
  this.list = []
};

var taskObject = function(content) {
  this.content = content;
  this.completed = false;
}

newTodoList.prototype.add = function(task) {
  this.list.push(new taskObject(task));
}

newTodoList.prototype.tasks = function() {
  for (var i in this.list) {
    if (this.list[i].completed == true) {
      console.log("[x] " + this.list[i].content);
    } else {
      console.log("[ ] " + this.list[i].content);
    }
  }
}



newTodoList.prototype.remove = function(content) {
  var index = null;
  var todoList = this;
  todoList.list.forEach(function(element){
    if (element.content === task) {
      index = todoList.list.indexOf(element);
    };
  });

  for (var i = 0; i < this.list.length; i++) { 
  var task = this.list[i];
    if (task.content === content){
      this.list.splice(i, 1);
      return;
    }
  }
}

newTodoList.prototype.complete = function(task) {
  var index = null;
  var self = this;
  self.list.forEach(function(element){
    if (element.content === task) {
      index = self.list.indexOf(element);
    };
  });

  this.list[index].completed = true
}


// Driver code
var list = new newTodoList();

// list.add('first task')
// list.add('second task')
// list.add('third task')
// list.add('fourth task')
// list.add('fifth task')

// list.tasks();
// console.log("");
// list.remove('fourth task');
// console.log("");

// list.tasks(); 

// list.complete('second task')
// console.log("");
// list.tasks(); 

// display_list
// display_list=""

// for(i in list.list){
//   display_list.concat(list.list[i].content)
// }


// document.getElementById('items').innerHTML = display_list +""



