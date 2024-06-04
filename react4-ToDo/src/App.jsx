import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/203",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like This Video",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
