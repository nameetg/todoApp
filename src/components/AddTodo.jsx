import { IoMdAddCircleOutline } from "react-icons/io";
import { useState, useRef } from "react";

function AddTodo({ onNewItem }) {
  const newTodoItem = useRef();
  const newDueDate = useRef();

  const handleSubmitClick = (event) => {
    event.preventDefault();
    onNewItem(newTodoItem.current.value, newDueDate.current.value);
    newTodoItem.current.value = "";
    newDueDate.current.value = "";
  };

  return (
    <form className="container text-center" onSubmit={handleSubmitClick}>
      <div className="row aura-rows">
        <div className="col-4">
          <input type="text" ref={newTodoItem} placeholder="Enter Todo Here" />
        </div>
        <div className="col-3">
          <input type="date" ref={newDueDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success aura-btn">
            <IoMdAddCircleOutline />
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
