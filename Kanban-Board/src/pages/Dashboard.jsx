import List from "../components/List";
import Form from "../components/Form";

function Dashboard ({listArray, setListArray}) {
    return (
        
       
        <div className = "dashboard">
            <Form listArray={listArray} setListArray={setListArray} />
         <List listArray={listArray} setListArray={setListArray} />

        </div>
       
    )
}

export default Dashboard
