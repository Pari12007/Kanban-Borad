import List from "../components/List";


function Dashboard ({listArray, setListArray}) {
    return (
        
       
        <div className = "dashboard">
           
          
         <List listArray={listArray} setListArray={setListArray} />
    

        </div>
       
    )
}

export default Dashboard


