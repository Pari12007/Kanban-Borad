import { useNavigate, useParams } from "react-router-dom";



function ItemDetails ({listArray}){
const {id} = useParams()
const list = listArray.find((list)=>list.id === id)
  if (!list) return <h2>Item not found</h2>;
  const nav = useNavigate()
function handleBack(){
nav("/")
}


    return (
        <div className="item-details">
<h2><u>{list.title}</u></h2>
<p><strong>Decscription:</strong> {list.description}</p>
<p><strong>Assignee:</strong> {list.assignee}</p>
<p><strong>Priority:</strong> {list.priority}</p>
<p><strong>Created Date: </strong> {list.createdDate}</p>
<p><strong>Due Date: </strong>{list.dueDate}</p>
<button className="back-button" onClick={handleBack}>Back</button>

        </div>
    )
}

export default ItemDetails;