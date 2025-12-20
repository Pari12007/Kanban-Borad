import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ItemDetails from "./pages/ItemDetails"
import { Routes, Route } from "react-router-dom"

function App() {
    return (
      
    
    <div className = "App">
    <Navbar />
     <Sidebar />
     <Footer /> 

     <Routes>
<Route path="/" element={<Dashboard />}/>
<Route path="/about" element ={<About />} /> 
<Route path="/itemDetails" elemet={<ItemDetails/>}/>
<Route path= "*" element={<NotFound />} /> 
     </Routes>

   </div>

  
  )
}

export default App
