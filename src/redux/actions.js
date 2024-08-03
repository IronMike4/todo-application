// Action types for different todo operations
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// Action creator for adding a new todo
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: content, // The content of the new todo item
});

// Action creator for editing an existing todo
export const editTodo = (index, content) => ({
  type: EDIT_TODO,
  payload: { index, content }, // The index of the todo to edit and the new content
});

// Action creator for deleting a todo
export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: index, // The index of the todo to delete
});

// Action creator for toggling the completion status of a todo
export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: index, // The index of the todo to toggle
});
