import React from "react";
import Task from "./Task";

function TaskList({tasks, onTaskRemove}) {
  const TaskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onTaskRemove={onTaskRemove}
    />
  ))
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {TaskList}
    </div>
  );
}

export default TaskList;
