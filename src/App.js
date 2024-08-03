import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import InfoPopup from "./components/InfoPopup";
import { FaInfoCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // State to control visibility of the info popup
  const [showInfoPopup, setShowInfoPopup] = useState(false);

  return (
    <Provider store={store}>
      <div className="container text-center mt-5">
        <h1 className="mb-4">To-Do Application</h1>
        <AddTodo />
        <TodoList />
        <div className="position-fixed" style={{ top: "10px", right: "10px" }}>
          {/* Info icon to toggle the info popup */}
          <FaInfoCircle size={24} onClick={() => setShowInfoPopup(true)} />
        </div>
        <InfoPopup
          show={showInfoPopup}
          onClose={() => setShowInfoPopup(false)}
        />
      </div>
    </Provider>
  );
};

export default App;
