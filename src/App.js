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
    // keylerin benzersiz olmasını sağlar
    let rowNumber = 0;
    if (toDos.length > 0) {
      rowNumber = toDos[toDos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((toDos) => [...toDos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = toDos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <ToDoTable toDos={toDos} deleteTodo={deleteTodo} />
          <button className="btn btn-primary">Add Todo</button>
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
