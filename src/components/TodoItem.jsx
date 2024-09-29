import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDelete }) {
  return (
    <div className="container">
      <div className="row aura-rows">
        <div className="col-4">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger aura-btn"
            onClick={() => onDelete(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
