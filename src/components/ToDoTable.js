import ToDoRowItem from "./ToDoRowItem";

function ToDoTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.toDos.map((todo) => (
          <ToDoRowItem
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
          />
        ))}
      </tbody>
    </table>
  );
}
export default ToDoTable;
