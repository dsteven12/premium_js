var todoList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0) {
      console.log('There are currently no todos.')
    } else {
      console.log('My todos: ');
      for(var position in this.todos) {
        if(this.todos[position].completed !== true) {
            console.log("( ) " + this.todos[position].todoText);
        } else {
            console.log("(X) " + this.todos[position].todoText);
        }
      }
    }
  },
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodos: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodos: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length; 
    var completedTodos = 0;

    for(var position in this.todos) {
      if(this.todos[position].completed === true) {
        completedTodos++;
      }       
    }
    //Case 1: If everything is true, make everything false.
    if(completedTodos === totalTodos) {
      for(var position in this.todos) {
        this.todos[position].completed = false;
      } 
    //Case 2: Otherwise, make everything false.
    } else {
          for(var position in this.todos) {
            this.todos[position].completed = true;
          }
      }
    }
}
