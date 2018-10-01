var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My todos: ');
    for(var text in this.todos) {
      console.log(this.todos[text].todoText);
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
  }
}
