import React from "react";

function Task({text,category,onTaskRemove}) {
  function handleRemoveTask(){
    onTaskRemove(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleRemoveTask}>X</button>
    </div>
  );
}

export default Task;
