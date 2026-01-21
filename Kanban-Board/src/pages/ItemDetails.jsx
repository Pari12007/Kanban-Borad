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
<h2>{list.title}</h2>
<p>Decscription: {list.description}</p>
<p>Assignee: {list.assignee}</p>
<p>Priority: {list.priority}</p>
<p>Created Date: {list.createdDate}</p>
<p>Due Date: {list.dueDate}</p>
<button onClick={handleBack}>Back</button>

        </div>
    )
}

export default ItemDetails;