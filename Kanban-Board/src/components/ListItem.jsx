import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function ListItem ({task, handleDelete}){
    const nav = useNavigate()

const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id:task.id})

const style ={
transition, transform: CSS.Transform.toString(transform)


}
    function notify(){
        toast("Task deleted!")
    }

function handleNav (){
    nav(`/itemDetails/${task.id}`)
}
    

    return ( 
        
        <div className="task" ref={setNodeRef} {...attributes} {...listeners} syle={style}>

        <p onClick={handleNav}>{task.title}</p> 
        <Link to={`updateTask/${task.id}`}>
            <button>Edit</button>
        </Link>

            <button onClick={()=> {handleDelete(task.id);notify()}}>Delete</button>   
               
    </div>
     
    )
        
}

export default ListItem;