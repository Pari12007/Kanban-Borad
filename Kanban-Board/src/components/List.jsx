// import ListItem from "./ListItem";
// import { useParams } from "react-router-dom";
// import {horizontalListSortingStrategy, SortableContext} from "@dnd-kit/sortable";
// import { useDroppable } from "@dnd-kit/core"; 

// function List({ listArray, setListArray }) {
//   const { id } = useParams();

//   const handleDelete = (id) => {
//     setListArray(listArray.filter((task) => task.id !== id));
//   };

//   return (
//     <>
//       <div className="task-container">

// {/* TO DO MAPPING */}

//         <div className="to-do">
//           <h2>To Do {listArray.status === "To Do" && "📝"}</h2>

//           {(() => {
//             const tasks = listArray.filter((task) => task.status === "To Do");

//             return (
//               <SortableContext
//                 items={tasks.map((task) => task.id)}
//                 strategy={horizontalListSortingStrategy}
//               >
//                 {tasks.map((task) => (
//                   <ListItem
//                     key={task.id}
//                     task={task}
//                     handleDelete={handleDelete}
//                   />
//                 ))}
//               </SortableContext>
//             );
//           })()}
//         </div>


// {/* IN PROGRESS MAPPING */}

//         <div className="in-progress">
//           <h2>In Progress {listArray.status === "In Progress" && "⏳"}</h2>

//           {(() => {
//             const tasks = listArray.filter(
//               (task) => task.status === "In Progress",
//             );

//             return (
//               <SortableContext
//                 items={tasks.map((task) => task.id)}
//                 strategy={horizontalListSortingStrategy}
//               >
//                 {tasks.map((task) => (
//                   <ListItem
//                     key={task.id}
//                     task={task}
//                     handleDelete={handleDelete}
//                   />
//                 ))}
//               </SortableContext>
//             );
//           })()}
//         </div>


// {/* DONE MAPPING */}

//         <div className="done">
//           <h2>Done {listArray.status === "Done" && "✅"} </h2>

//           {(() => {
//             const tasks = listArray.filter((task) => task.status === "Done");

//             return (
//               <SortableContext
//                 items={tasks.map((task) => task.id)}
//                 strategy={horizontalListSortingStrategy}
//               >
//                 {tasks.map((task) => (
//                   <ListItem
//                     key={task.id}
//                     task={task}
//                     handleDelete={handleDelete}
//                   />
//                 ))}
//               </SortableContext>
//             );
//           })()}
//         </div>
//       </div>
//     </>
//   );
// }

// export default List;


// src/components/List.jsx
import ListItem from "./ListItem";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

function List({ listArray, setListArray }) {
  const handleDelete = (id) => {
    setListArray((prev) => prev.filter((task) => task.id !== id));
  };

  // ----- TO DO -----
  const todoTasks = listArray.filter(
    (task) => task.status === "To Do"
  );
  const { setNodeRef: setTodoRef} = useDroppable({ id: "To Do" });

  // ----- IN PROGRESS -----
  const progressTasks = listArray.filter(
    (task) => task.status === "In Progress"
  );
  const { setNodeRef: setProgressRef } = useDroppable({ id: "In Progress" });

  // ----- DONE -----
  const doneTasks = listArray.filter(
    (task) => task.status === "Done"
  );
  const { setNodeRef: setDoneRef } = useDroppable({ id: "Done" });

  return (
    <div className="task-container">
      {/* TO DO COLUMN */}
      <div className="to-do" ref={setTodoRef}>
        <h2>To Do 📝</h2>

        <SortableContext
          items={todoTasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {todoTasks.map((task) => (
            <ListItem
              key={task.id}

              task={task}
              handleDelete={handleDelete}
            />
          ))}
        </SortableContext>
      </div>

      {/* IN PROGRESS COLUMN */}
      <div className="in-progress" ref={setProgressRef}>
        <h2>In Progress ⏳</h2>

        <SortableContext
          items={progressTasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {progressTasks.map((task) => (
            <ListItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
        </SortableContext>
      </div>

      {/* DONE COLUMN */}
      <div className="done" ref={setDoneRef}>
        <h2>Done ✅</h2>

        <SortableContext
          items={doneTasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {doneTasks.map((task) => (
            <ListItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

export default List;

