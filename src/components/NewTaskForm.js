import React,{useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [category, setCategory] = useState("Code")
  const [text,setText] = useState("")
  
  function handleTextChange(e){
    setText(e.target.value)
  }
  function handleCategoryChange(e){
    setCategory(e.target.value)
  }
  function handleFormSubmit(e){
    e.preventDefault()
    const newTask = {
      key:text,
      text:text,
      category:category
    }
    onTaskFormSubmit(newTask)
    setText("")
    setCategory("Code")
  }
  const categoryList = categories.map((category)=> (
    <option key={category} value={category}>{category}</option>
  ))

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        onChange={handleTextChange}
        value= {text}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          onChange={handleCategoryChange}
          value={category}
        >
          {categoryList}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
