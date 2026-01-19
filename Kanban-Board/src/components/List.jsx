import ListItems from "./ListItem" 




function List ({listArray, setListArray}){

    
    const handleDelete = (id) => {
        setListArray(listArray.filter((lists) => lists.id !== id))
    }
    
    return (
      <>
      <div className="list">
        {listArray.map((lists) =>(
            <ListItems lists={lists} key={lists.id} handleDelete={handleDelete} />
 
        ))}


      </div>
      </>  
        
        
    )
}

export default List