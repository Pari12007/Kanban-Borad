import { Link, useNavigate } from "react-router-dom";

function ListItem ({task, handleDelete}){
const nav = useNavigate()

function handleNav (){
    nav(`/itemDetails/${task.id}`)
}
    
    return ( 
    <div>
        <h3 onClick={handleNav}>{task.title}</h3> 
        <Link to={`updateTask/${task.id}`}>
            <button>Edit</button>
        </Link>

            <button onClick={()=> handleDelete(task.id)}>Delete</button>      
    </div>
     
    )
        
}

export default ListItem;