import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddButtonClick = (newTodoItem, newDueDate) => {
    setTodoItems((currVal) => {
      const temp = [
        ...currVal,
        {
          name: newTodoItem,
          dueDate: newDueDate,
        },
      ];
      return temp;
    });
  };

  const handleDelete = (deleteItem) => {
    const tempItems = todoItems.filter((item) => item.name != deleteItem);
    setTodoItems(tempItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleAddButtonClick}> </AddTodo>
      {!todoItems.length && <WelcomeMessage />}
      <TodoItems todoItem={todoItems} onDeleteClick={handleDelete}></TodoItems>
    </center>
  );
}

export default App;
