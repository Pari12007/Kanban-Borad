import ListItem from "./ListItem";

import { useParams } from "react-router-dom";

import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

function List({ listArray, setListArray }) {
  const { id } = useParams();

  const handleDelete = (id) => {
    setListArray(listArray.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="task-container">
        <div className="to-do">
          <h2>To Do {listArray.status === "To Do" && "📝"}</h2>

          {(() => {
            const tasks = listArray.filter((task) => task.status === "To Do");

            return (
              <SortableContext
                items={tasks.map((task) => task.id)}
                strategy={horizontalListSortingStrategy}
              >
                {tasks.map((task) => (
                  <ListItem
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                  />
                ))}
              </SortableContext>
            );
          })()}
        </div>

        <div className="done">
          <h2>In Progress {listArray.status === "In Progress" && "⏳"}</h2>

          {(() => {
            const tasks = listArray.filter(
              (task) => task.status === "In Progress",
            );

            return (
              <SortableContext
                items={tasks.map((task) => task.id)}
                strategy={horizontalListSortingStrategy}
              >
                {tasks.map((task) => (
                  <ListItem
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                  />
                ))}
              </SortableContext>
            );
          })()}
        </div>

        <div className="done">
          <h2>Done {listArray.status === "Done" && "✅"} </h2>

          {(() => {
            const tasks = listArray.filter((task) => task.status === "Done");

            return (
              <SortableContext
                items={tasks.map((task) => task.id)}
                strategy={horizontalListSortingStrategy}
              >
                {tasks.map((task) => (
                  <ListItem
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                  />
                ))}
              </SortableContext>
            );
          })()}
        </div>
      </div>
    </>
  );
}

export default List;
