var todos = ["Item 1", "Item 2", "Item 3"];

function displayTodos() {
  console.log(`My todos:`, todos);
}

function addTodos(newTodo) {
  todos.push(newTodo);
  displayTodos();
}

function changeTodos(position, newTodo) {
  todos[index] = newTodo;
  displayTodos();
}

function deleteTodos(position) {
  todos.splice(position, 1);
  displayTodos();
}