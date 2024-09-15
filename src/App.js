import React, { useState } from "react";
import "./App.css";
import ToDoTable from "./components/ToDoTable";
import NewTodoForm from "./components/NewTodoForm";
function App() {
  const [toDos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed cat", rowAssigned: "Talha" },
    { rowNumber: 2, rowDescription: "Gym", rowAssigned: "Genar" },
    { rowNumber: 3, rowDescription: "Study", rowAssigned: "Meral" },
    { rowNumber: 4, rowDescription: "Work", rowAssigned: "Talha" },
  ]);

  const addTodo = (description, assigned) => {
    if (toDos.length > 0) {
      const newTodo = {
        rowNumber: toDos.length + 1,
        rowDescription: description,
        rowAssigned: assigned,
      };
      setTodos((toDos) => [...toDos, newTodo]);
    }
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <ToDoTable toDos={toDos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add Todo
          </button>
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
