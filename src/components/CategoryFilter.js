import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  const categoryList = categories.map((category)=> (
    <button 
    className={category === selectedCategory ?"selected": null}
    key={category}
    onClick={()=>onSelectCategory(category)}
    >
      {category}
    </button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
