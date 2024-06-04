import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState, useReducer } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    const newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "Delete_ITEM") {
    return newTodoItems;
  }
};

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/203",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like This Video",
  //     dueDate: "4/10/2023",
  //   },
  // ];

  // const [todoItems, setTodoItems] = useState(initialTodoItems);
  //const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  //console.log(`New item added:${itemName} Date:${itemDueDate}`);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };

    dispatchTodoItems(newItemAction);

    //   const newTodoItems = [
    //     ...todoItems,
    //     { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    //   ];
    //   setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center class="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
