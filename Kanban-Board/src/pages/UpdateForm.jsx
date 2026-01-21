import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import {toast} from "react-toastify"


function UpdateForm ({ listArray, setListArray}) {
  const {id} = useParams()
  const oneTask = listArray.find((task)=> task.id === id)


  if (!oneTask) {
    return <p>Task not found</p>
  }

  const nav = useNavigate();
  const [title, setTitle] = useState(oneTask.title);
  const [description, setDescription] = useState(oneTask.description);
  const [assignee, setAssignee] = useState(oneTask.assignee);
  const [status, setStatus] = useState(oneTask.status);
  const [priority, setPriority] = useState(oneTask.priority);
  const [createdDate, setCreatedDate] = useState(oneTask.createdDate);
  const [dueDate, setDueDate] = useState(oneTask.dueDate);

  function handleEditTask (event){
    event.preventDefault()
    const updatedTask = {
      id,
title, description, assignee, status, priority, createdDate, dueDate
    }

    const mappedTask = listArray.map ((oneTask)=>{
if (oneTask.id === id) {
  return updatedTask
  } else {
    return oneTask
  }
}) 
setListArray(mappedTask)

toast.success("Task updated!")
nav("/")


}

    return (
        <div className="form-page">
      <form onSubmit={handleEditTask}>
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
          name = "description" 
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
        <button type="submit">Edit Task</button>
      </form>
    </div> 
    )
}

export default UpdateForm