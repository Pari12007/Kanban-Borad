import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function ListItem ({task, handleDelete}){
    const nav = useNavigate()

const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id:task.id})

const style ={
transition, transform: CSS.Transform.toString(transform),
cursor: "grab"
}
    function notify(){
        toast("Task deleted!")
    }

function handleNav (){
    nav(`/itemDetails/${task.id}`)
}
    

    return ( 
        
        <div className="task" ref={setNodeRef} style={style} {...listeners} {...attributes}>


        <p onClick={handleNav} className="task-title">{task.title} </p> 


        <Link to={`updateTask/${task.id}`} onClick={(e) => e.stopPropagation()}>
            <button>Edit</button>
        </Link>

            <button 
               type="button"
               onPointerDown={(e) => e.stopPropagation()}
               onClick={(e)=> {
                e.stopPropagation();
                handleDelete(task.id);
                notify();
            }}>Delete</button>   
               
    </div>
     
    )
        
}


export default ListItem;