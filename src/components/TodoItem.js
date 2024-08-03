import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/actions";
import EditTodo from "./EditTodo";
import AddTodoModal from "./AddTodoModal";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  // State to manage whether the EditTodo modal is open
  const [isEditing, setIsEditing] = useState(false);
  // State to manage whether the AddTodoModal is open
  const [showAddModal, setShowAddModal] = useState(false);

  // Handler to delete a todo item by dispatching the deleteTodo action
  const handleDelete = () => {
    dispatch(deleteTodo(index));
  };

  // Handler to toggle the completed status of a todo item
  const handleToggle = () => {
    dispatch(toggleTodo(index));
  };

  // Handler to add a new todo item by dispatching the addTodo action
  const handleAddNew = (newTodoContent) => {
    if (newTodoContent) {
      dispatch(addTodo(newTodoContent));
    }
  };

  return (
    <div
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.completed ? "list-group-item-secondary" : ""
      }`}
    >
      <div className="d-flex align-items-center">
        {/* Checkbox to mark the todo item as completed */}
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.completed}
          onChange={handleToggle}
          disabled={todo.completed}
        />
        {/* Display todo content with strikethrough if completed */}
        <span
          className={`${todo.completed ? "text-decoration-line-through" : ""}`}
        >
          {todo.content}
        </span>
      </div>
      {/* Button group for actions related to the todo item */}
      <div className="btn-group" role="group">
        {/* Button to open the AddTodoModal */}
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setShowAddModal(true)}
        >
          Add
        </button>
        {/* Button to open the EditTodo modal, disabled if todo is completed */}
        <button
          className="btn btn-warning btn-sm"
          onClick={() => setIsEditing(true)}
          disabled={todo.completed}
        >
          Edit
        </button>
        {/* Button to delete the todo item */}
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {/* Conditionally render the EditTodo modal if isEditing state is true */}
      {isEditing && (
        <EditTodo
          index={index}
          currentContent={todo.content}
          onClose={() => setIsEditing(false)}
        />
      )}
      {/* Conditionally render the AddTodoModal if showAddModal state is true */}
      <AddTodoModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddNew}
      />
    </div>
  );
};

export default TodoItem;
