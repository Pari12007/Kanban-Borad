import kanbanLogo from "../assets/kanban-logo.jpg"

function Navbar (){
    return (
        
        <div className = "navbar">
<img 
src={kanbanLogo}
className = "kanban-logo"/>
<h3>Kanban Board</h3>

        </div>
        
        
    )
}

export default Navbar