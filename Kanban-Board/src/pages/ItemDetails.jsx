import { useNavigate, useParams } from "react-router-dom";



function ItemDetails ({listArray}){
const {id} = useParams()
const task = listArray.find((t)=> String(t.id) === id)
  if (!task) return <h2>Item not found</h2>;
  const nav = useNavigate()
function handleBack(){
nav("/")
}


    return (
        <div className="item-details">
<h2><u>{task.title}</u></h2>
<p><strong>Decscription:</strong> {task.description}</p>
<p><strong>Assignee:</strong> {task.assignee}</p>
<p><strong>Priority:</strong> {task.priority}</p>
<p><strong>Created Date: </strong> {task.createdDate}</p>
<p><strong>Due Date: </strong>{task.dueDate}</p>
<button className="back-button" onClick={handleBack}>Back</button>

        </div>
    )
}

export default ItemDetails;