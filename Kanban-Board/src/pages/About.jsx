function About (){
    return (
      
        <div className = "about-container">
        <div className="author-container">
        <div className="pari-info">
           <img/>
           <p>Pari</p> 
           <a href="https://github.com/Pari12007">Github</a> 
        </div>
        <div className="martina-info">
           <img />
           <p>Martina</p>
           <a href="https://github.com/martinaziza">Github</a> 
        </div>
        </div>
        <div className="kanban-info">
           <h2>Kanban Board Project</h2>
           <p>The Kanban Board lets you manage tasks visually by organizing them into columns like To Do, In Progress, and Done. You can easily add, update, move, or delete tasks using smooth drag-and-drop interactions. It helps you stay organized, track progress, and complete work more efficiently.</p>
        </div>
    
        </div>
    )
}

export default About;
