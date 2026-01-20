import githubLogo from "../assets/GitHub-logo.png"

function Footer (){
    return (
        
        <div className = "footer">
<img 
src={githubLogo}
className = "github-logo"/>
<p><a href="https://github.com/Pari12007/Kanban-Borad" target= "_blank">Github Repository</a></p>

        </div>      
        
    )
}

export default Footer