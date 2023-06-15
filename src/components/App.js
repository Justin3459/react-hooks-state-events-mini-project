import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")
  const taskArray = tasks.filter(
    (task)=>category === "All" || task.category === category
  )

  function handleTasksAdd(newTasks){
      setTasks([...tasks, newTasks])
  }
  function handleTasksRemove(task){
    setTasks(tasks.filter((item)=> item.text !== task))
  }

   return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories= {CATEGORIES}
        selectedCategory= {category}
        onSelectCategory= {setCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter((cat)=>cat !== "All")}
        onTaskFormSubmit = {handleTasksAdd}
      />
      <TaskList 
        tasks={taskArray}
        onTaskRemove={handleTasksRemove}
      />
    </div>
  );
}

export default App;
