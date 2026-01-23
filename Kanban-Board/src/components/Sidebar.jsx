import {Link} from "react-router-dom";
import aboutIocn from "../assets/icon.jpg"

function Sidebar() {
  return (
    <div className = "sidebar">

        <Link to = "/" className="home-link">
          <p>Home</p>
        </Link>

<Link to = "/addTask" className="add-task-link">
          <p>Add Task</p>
        </Link>

        <Link to = "/about" className="about-link">
        <img src={aboutIocn} alt="About Icon" className="about-icon"/>
           <p>About</p>
         </Link>
    </div>
  );
}

export default Sidebar;
