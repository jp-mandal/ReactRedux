import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.todoContainer}>
      {todoItems.map((item) => (
        <TodoItem item={item.name} date={item.dueDate}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
