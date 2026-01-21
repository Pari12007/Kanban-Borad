import { Link } from "react-router-dom"
import ListItem from "./ListItem" 
import { useParams } from "react-router-dom"



function List ({listArray, setListArray}){
const {id} = useParams()
    
    const handleDelete = (id) => {
        setListArray(listArray.filter((task) => task.id !== id))
    }

    const column = (status) => (
      listArray.filter(task => task.status === status)
      .map(task => (

        <ListItem key={task.id} task={task} handleDelete={handleDelete}
        /> 
        
    ))
    )

    
    return (
      <>
      <div className = "task-container">
        <div className ="to-do">
        <h2>To Do {column("To Do").length >= 0  && "📝"}</h2>
        {column("To Do")}
        </div>


        <div className ="In-Progress">
        <h2>In Progress {column("In Progress").length >= 0 && "⏳"}</h2>
        {column("In Progress")}
        </div>

        
        <div className ="done">
        <h2>Done {column("Done").length >= 0 && "✅"}</h2>
        {column("Done")}
        </div>
        
      </div>
      </>  
        
        
    )
}

export default List