import NotFoundImg from "../assets/404.jpg"
function NotFound (){
    return (
        <div>
<img src={NotFoundImg} alt="not found image" className = "NotFound"/>
        </div>
    )
}

export default NotFound;