import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";

const EditTodo = ({ index, currentContent, onClose }) => {
  // Local state to manage input value and error message
  const [input, setInput] = useState(currentContent);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  // Function to handle saving the edited todo item
  const handleSave = () => {
    if (input.trim() === "") {
      // Set error message if input is empty
      setError("Todo content cannot be empty.");
      return;
    }
    // Dispatch the action to update the todo item with the new content
    dispatch(editTodo(index, input));
    // Close the modal after saving
    onClose();
  };

  // Function to handle Enter key press event
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default Enter key behavior
      handleSave(); // Trigger save action
    }
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      {/* Modal Dialog containing the modal content */}
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header with title and close button */}
          <div className="modal-header">
            <h5 className="modal-title">Edit Todo</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          {/* Modal Body with input field and error message */}
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)} // Update input state on change
              placeholder="Edit todo"
              onKeyDown={handleKeyDown} // Handle Enter key press
            />
            {/* Display error message if there is one */}
            {error && <div className="text-danger mt-2">{error}</div>}
          </div>
          {/* Modal Footer with Save and Cancel buttons */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
