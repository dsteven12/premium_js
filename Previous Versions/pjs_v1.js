var todos = ["Item 0", "Item 1", "Item 2"];
console.log(`My Todos: ${todos}.`);

todos.push("Item 3");
console.log(`Added todo: ${todos[3]}.`)

todos[0] = "New Item 0";
console.log(`Changed todo: ${todos[0]}.`);

todos.splice(0,1);
console.log(`${todos}, is the REMAINING Todos.`);