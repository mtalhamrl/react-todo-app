import React, { useState } from "react";

export const NewTodoForm: React.FC<{ addTodo: Function }> = (props) => {
  //   const descriptionChange = (event) => {
  //     console.log(event.target.value);
  //   };

  //   const assignedChange = (event) => {
  //     console.log(event.target.value);
  //   };

  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addTodo(description, assigned);
      setAssigned("");
      setDescription("");
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setAssigned(e.target.value)}
            value={assigned}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={submitTodo}>
          Add Todo
        </button>
      </form>
    </div>
  );
};
