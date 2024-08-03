import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
  // Use the useSelector hook to get the list of todos from the Redux store
  const todos = useSelector((state) => state.todos.list);

  return (
    <div>
      {/* Container for the list of todo items */}
      <div className="list-group mb-4">
        {/* Map over the todos array and render a TodoItem component for each todo */}
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </div>
      {/* Display the total number of todos in a fixed position at the bottom right */}
      <div className="position-fixed bottom-0 end-0 p-3 bg-white border rounded">
        Total Todos: {todos.length}
      </div>
    </div>
  );
};

export default TodoList;
