import Form from "../components/Form";

function AddTask({listArray, setListArray}){

return (
    <div className ="task-container">
    <Form listArray={listArray} setListArray={setListArray} />
    </div>
)

}

export default AddTask