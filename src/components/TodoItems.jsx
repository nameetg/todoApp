import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItem, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItem.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDelete={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
