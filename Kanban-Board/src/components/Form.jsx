import { useState } from "react";


function Form({listArray, setListArray}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Low");
  const [createdDate, setCreatedDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleNewTask(event) {
    event.preventDefault();

    const newTask = {
      title,
      description,
      assignee,
      status,
      priority,
      createdDate,
      dueDate,
    }

    setListArray([...listArray, newTask]);

    // Reset form fields
    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("To Do");
    setPriority("Low");
    setCreatedDate("");
    setDueDate(""); 
  }

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
          <select
          name = "status"
          value = {status}
          onChange = {(event) => setStatus(event.target.value)}
          >
            <option value = "To Do">To do</option>
            <option value = "In Progress">In progress</option>
            <option value = "Done">Done</option>
          </select>
        </label>

        {/* //PRIORITY */}

        <label>
          Priority:
          <select
          name = "priority" 
          value = {priority}
          onChange = {(event) => setPriority(event.target.value)}
          >
            <option value = "Low">Low</option>
            <option value = "Medium">Medium</option>
            <option value = "High">High</option>
          </select>
        </label>

        {/* //CREATED DATE */}
        <label>
          Created Date:
          <input 
          name = "createdDate"
          value = {createdDate}
          onChange = {(event) => setCreatedDate(event.target.value)}
          placeholder = "dd/mm/yyyy"/>
          
        </label>

        {/* //DUE DATE */}
        <label>
          Due Date:
          <input 
          name = "dueDate"
          value = {dueDate}
          onChange = {(event) => setDueDate(event.target.value)}
          placeholder = "dd/mm/yyyy"
          />
        </label>
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default Form;
