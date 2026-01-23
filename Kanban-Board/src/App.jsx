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
import {closestCorners, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors} from "@dnd-kit/core"
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { arrayMove } from '@dnd-kit/sortable';


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
 
const sensors = useSensors(
  useSensor(PointerSensor, {
    activationConstraint: {distance: 8},
  }),
  useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  })
);
// const getTaskPos = id => listArray.findIndex(task => task.id === id)

// const handleDragEnd =(event) => {
//   const {active, over} = event;
//   if(!over || active.id === over.id);

//   const originalPos = getTaskPos(active.id)
//   const newPos = getTaskPos(over.id)
  
 

//   setListArray((items) => { arrayMove (items, originalPos, newPos)
//   })
// }

// const handleDragEnd = ({ active, over }) => {
//   if (!over) return;

//   setListArray(tasks => {
//     const activeIndex = tasks.findIndex(t => t.id === active.id);
//     const overIndex = tasks.findIndex(t => t.id === over.id);

//     if (activeIndex === -1 || overIndex === -1) return tasks;

//     const updated = [...tasks];

//     // 🔑 update status when dropped over another column
//     updated[activeIndex] = {
//       ...updated[activeIndex],
//       status: updated[overIndex].status,
//     };

//     return arrayMove(updated, activeIndex, overIndex);
//   });
// };

const COLUMNS = ["To Do", "In Progress", "Done"];
const isColumnId = (id) => COLUMNS.includes(id);

const handleDragOver = ({ active, over }) => {
  if (!over) return;

  const activeId = active.id;
  const overId = over.id;

  if (activeId === overId) return;

  setListArray((tasks) => {
    const activeIndex = tasks.findIndex((t) => t.id === activeId);
    if (activeIndex === -1) return tasks;

    const activeTask = tasks[activeIndex];

    // ✅ Find which column we are hovering
    let newStatus;
    if (isColumnId(overId)) {
      newStatus = overId; // hovering a column (empty space)
    } else {
      const overTask = tasks.find((t) => t.id === overId);
      if (!overTask) return tasks;
      newStatus = overTask.status; // hovering another task
    }

    // If same status, no need to move between columns here
    if (activeTask.status === newStatus) return tasks;

    // ✅ Move task into the new column (status change)
    const updated = [...tasks];
    updated[activeIndex] = { ...activeTask, status: newStatus };
    return updated;
  });
};

const handleDragEnd = ({ active, over }) => {
  if (!over) return;

  const activeId = active.id;
  const overId = over.id;

  if (activeId === overId) return;

  setListArray((tasks) => {
    const activeIndex = tasks.findIndex((t) => t.id === activeId);
    if (activeIndex === -1) return tasks;

    // ✅ If you drop on a COLUMN (not a task), keep it as last item in that column
    if (isColumnId(overId)) return tasks;

    // ✅ If you drop on a TASK, reorder by arrayMove
    const overIndex = tasks.findIndex((t) => t.id === overId);
    if (overIndex === -1) return tasks;

    return arrayMove(tasks, activeIndex, overIndex);
  });
};


  return (
      
    
    <div className = "App">
    <Navbar />

    <div className = "layout">
      <div>
         <Sidebar />
      </div>
      

      <main className = "main">
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors} onDragOver={handleDragOver}>
     <Routes>
<Route path="/" element={<Dashboard listArray={listArray} setListArray={setListArray} />}/>
<Route path="/about" element ={<About />} /> 
<Route path="/itemDetails/:id" element={<ItemDetails listArray={listArray}/>}/>
<Route path= "*" element={<NotFound />} /> 
<Route path="/addTask" element = {<AddTask listArray={listArray} setListArray={setListArray} /> } />
<Route path="/updateTask/:id" element = {<UpdateForm listArray={listArray} setListArray={setListArray} /> } />
     </Routes>
        </DndContext>
        <ToastContainer/>

      </main>
     
    </div> <Footer /> 
   </div>

  
  )
}

export default App
