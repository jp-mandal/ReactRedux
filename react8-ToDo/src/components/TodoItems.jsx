import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const TodoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  return (
    <div className={styles.todoContainer}>
      {todoItems.map((item) => (
        <TodoItem
          item={item.name}
          date={item.dueDate}
          onDeleteClick={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
