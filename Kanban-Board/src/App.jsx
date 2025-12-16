import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
    return (
    <>   
    
    <div className = "HomePage">
    <Navbar />
     <Sidebar />
     <Footer /> 
    </div>
    </>
  )
}

export default App
