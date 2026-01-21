import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ItemDetails from "./pages/ItemDetails"
import { Routes, Route } from "react-router-dom"
import { useState } from 'react';
import AddTask from './pages/AddTask';
import UpdateForm from './pages/UpdateForm';
import {ToastContainer} from "react-toastify"


function App() {
    
  const listArrays = [
  {
    id: "1",
    title: "Design Landing Page",
    "description": "Create a visually appealing landing page for the website.",
    "assignee": "Mary Davis",
    "status": "To Do",
    "priority": "High",
    "createdDate": "2023-09-15",
    "dueDate": "2023-09-30"
  },
  {
    "id": "2",
    title: "Develop User Registration",
    "description": "Implement user registration functionality with email verification.",
    "assignee": "Jane Smith",
    "status": "In Progress",
    "priority": "Medium",
    "createdDate": "2023-09-16",
    "dueDate": "2023-10-10"
  },
  {
    "id": "3",
    "title": "Bug Fix: Login Issue",
    "description": "Investigate and fix the login problem reported by users.",
    "assignee": "Mark Johnson",
    "status": "In Progress",
    "priority": "High",
    "createdDate": "2023-09-17",
    "dueDate": "2023-09-25"
  },
  {
    "id": "4",
    "title": "Release Version 1.0",
    "description": "Prepare for the release of the first version of the application.",
    "assignee": "Sarah Brown",
    "status": "To Do",
    "priority": "High",
    "createdDate": "2023-09-18",
    "dueDate": "2023-10-05"
  },
  {
    "id": "5",
    "title": "Update Documentation",
    "description": "Update user documentation with the latest features and changes.",
    "assignee": "David Wilson",
    "status": "Done",
    "priority": "Low",
    "createdDate": "2023-09-19",
    "dueDate": "2023-09-30"
  }
]
  
const [listArray, setListArray] = useState(listArrays)
  
  return (
      
    
    <div className = "App">
    <Navbar />

    <div className = "layout">
      <div>
         <Sidebar />
      </div>
      

      <main className = "main">
     <Routes>
<Route path="/" element={<Dashboard listArray={listArray} setListArray={setListArray} />}/>
<Route path="/about" element ={<About />} /> 
<Route path="/itemDetails/:id" element={<ItemDetails listArray={listArray}/>}/>
<Route path= "*" element={<NotFound />} /> 
<Route path="/addTask" element = {<AddTask listArray={listArray} setListArray={setListArray} /> } />
<Route path="/updateTask/:id" element = {<UpdateForm listArray={listArray} setListArray={setListArray} /> } />
     </Routes>
        <ToastContainer/>

      </main>
     
    </div> <Footer /> 
   </div>

  
  )
}

export default App
