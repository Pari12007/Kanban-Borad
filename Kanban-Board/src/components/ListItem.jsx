function ListItem ({task, handleDelete}){

    
    return (
        <div>

        <h3>{task.title}</h3> 
            <button onClick={()=> handleDelete(task.id)}>Delete</button>
    
            </div>
    )
        
}

export default ListItem;