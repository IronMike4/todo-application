import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO } from "./actions";

// Initial state with default todos
const initialTodoState = {
  list: [
    { content: "Content1", completed: false },
    { content: "Content2", completed: false },
  ],
};

// Reducer to handle different todo actions
const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // Adds a new todo item
      return {
        ...state,
        list: [...state.list, { content: action.payload, completed: false }],
      };

    case EDIT_TODO:
      // Edits an existing todo item
      return {
        ...state,
        list: state.list.map((todo, index) =>
          index === action.payload.index
            ? { ...todo, content: action.payload.content }
            : todo
        ),
      };

    case DELETE_TODO:
      // Deletes a todo item by index
      return {
        ...state,
        list: state.list.filter((_, index) => index !== action.payload),
      };

    case TOGGLE_TODO:
      // Toggles the completed status of a todo item
      return {
        ...state,
        list: state.list.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      // Returns current state if action type is unknown
      return state;
  }
};

export default todoReducer;
