function ListItem ({lists, handleDelete}){

    
    return (
        <div>
         <h2>{lists.status} 
            <span>{lists.status === "Done" ? "✅"
            : lists.status === "To Do" ? "📝" 
            : lists.status === "In Progress" ? "⏳"
            : ""}
            </span>
        </h2>

        <h3>{lists.title}</h3> 

           
            <button onClick={()=> handleDelete(lists.id)}>Delete</button>
    
            </div>
    )
        
}

export default ListItem;