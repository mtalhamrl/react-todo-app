import "./App.css";
import ToDoTable from "./components/ToDoTable";
function App() {
  const toDos = [
    { rowNumber: 1, rowDescription: "Feed cat", rowAssigned: "Talha" },
    { rowNumber: 2, rowDescription: "Gym", rowAssigned: "Genar" },
    { rowNumber: 3, rowDescription: "Study", rowAssigned: "Meral" },
    { rowNumber: 4, rowDescription: "Work", rowAssigned: "Talha" },
  ];
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <ToDoTable toDos={toDos} />
        </div>
      </div>
    </div>
  );
}

export default App;
