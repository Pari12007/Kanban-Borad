import {Link} from "react-router-dom";
import aboutIocn from "../assets/icon.png"
import homeIcon from "../assets/home.png"
import addTaskIcon from "../assets/AddTask.png"
function Sidebar() {

  return (
    <div className = "sidebar">

        <Link to = "/" className="home-link">
          <img src={homeIcon} alt="Home Icon" className="home-icon"/>
          <p>Home</p>
        </Link>

<Link to = "/addTask" className="add-task-link">
<img src={addTaskIcon} alt="Add Task Icon" className="add-task-icon"/>
          <p className="AddTaskText">Add Task</p>
        </Link>

        <Link to = "/about" className="about-link">
        <img src={aboutIocn} alt="About Icon" className="about-icon"/>
           <p>About</p>
         </Link>
    </div>
  );
}

export default Sidebar;
