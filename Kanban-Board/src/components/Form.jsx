import { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Low");
  const [createdDate, setCreatedDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleNewTask(event) {}

  return (
    <div className="form-page">
      <form onSubmit={handleNewTask}>
        {/* TITLE */}
        <label>
          Title:
          <input
          name = "title" 
          value = {title}
          onChange = {(event) => setTitle(event.target.value)}
          type = "text"
          placeholder = "Enter task title"
          />
        </label>

        {/* DESCRIPTION */}
        <label>
          Description:
          <input 
          name = "discription" 
          value = {description}
          onChange = {(event) => setDescription(event.target.value)}
          type = "text"
          placeholder = "Enter task discription"
          />
        </label>

        {/* //ASSIGNEE */}
        <label>
          Assignee:
          <input
          name = "assignee" 
          value = {assignee}
          onChange = {(event) => setAssignee(event.target.value)}
          type = "text"
          placeholder = "Enter task assignee" 
          />
        </label>

        {/* //STATUS */}
        <label>
          Status:
          <select>
            <option></option>
          </select>
        </label>

        {/* //PRIORITY */}

        <label>
          Priority:
          <select>
            <option></option>
          </select>
        </label>

        {/* //CREATED DATE */}
        <label>
          Created Date:
          <input />
        </label>

        {/* //DUE DATE */}
        <label>
          Due Date:
          <input />
        </label>
      </form>
    </div>
  );
}

export default Form;
