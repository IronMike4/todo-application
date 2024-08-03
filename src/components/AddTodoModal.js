import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddTodoModal = ({ show, onClose, onAdd }) => {
  // State for managing the new todo content and error message
  const [newTodoContent, setNewTodoContent] = useState("");
  const [error, setError] = useState("");

  // Adds a new todo item if content is valid
  const handleAdd = () => {
    if (newTodoContent.trim() === "") {
      setError("Todo content cannot be empty");
    } else {
      onAdd(newTodoContent); // Pass the new todo content to parent component
      setNewTodoContent(""); // Clear the input field
      setError(""); // Clear any previous error message
      onClose(); // Close the modal
    }
  };

  // Handles Enter key press to add a todo item
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default Enter key behavior
      handleAdd(); // Trigger the add todo action
    }
  };

  // Resets input and error state, then closes the modal
  const handleClose = () => {
    setNewTodoContent("");
    setError("");
    onClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      {/* Modal Header: Displays the title and a close button */}
      <Modal.Header closeButton>
        <Modal.Title>Add New Todo</Modal.Title>
      </Modal.Header>

      {/* Modal Body: Contains the form for input and validation */}
      <Modal.Body>
        <Form onKeyDown={handleKeyPress}>
          <Form.Group>
            <Form.Label>Todo Content</Form.Label>
            <Form.Control
              type="text"
              value={newTodoContent}
              onChange={(e) => {
                setNewTodoContent(e.target.value); // Update input value
                setError(""); // Clear error when user types
              }}
              isInvalid={!!error} // Show validation error if present
            />
            <Form.Control.Feedback type="invalid">
              {error} {/* Display error message if any */}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>

      {/* Modal Footer: Includes the action buttons (Close and Add Todo) */}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Add Todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTodoModal;
