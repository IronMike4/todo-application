import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";

const AddTodo = () => {
  // State management for input value and error message
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  // Handle adding a new todo item
  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      setErrorMessage("Todo content cannot be empty.");
      return;
    }
    dispatch(addTodo(inputValue)); // Dispatch action to add todo
    setInputValue(""); // Clear input field
    setErrorMessage(""); // Clear error message
  };

  // Handle Enter key press for adding a todo
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default Enter key behavior
      handleAddTodo(); // Call function to add todo
    }
  };

  return (
    <div className="mb-4">
      {/* Input field and Add button */}
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
          onKeyDown={handleKeyDown} // Handle Enter key press
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      {/* Display error message if any */}
      {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
    </div>
  );
};

export default AddTodo;
