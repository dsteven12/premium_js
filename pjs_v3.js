var todoList = {
  todos: ["Item 1", "Item 2", "Item 3"],
  displayTodos: function() {
    console.log(`My todos:`, this.todos);
  },
  addTodos: function(newTodo) {
    this.todos.push(newTodo);
    this.displayTodos();
  },
  changeTodos: function(position, newTodo) {
    this.todos[position] = newTodo;
    this.displayTodos();
  },
  deleteTodos: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
}
