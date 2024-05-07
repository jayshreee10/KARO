import React from "react";
import TaskList from "./TaskList";
function task(props) {
  const items = props.items;
  return (
    <div>
      
      <ul>
        {items.map((item,i)=>{
          return(
          <TaskList key= {i} data={item} >  </TaskList>
          )
        })}
        </ul>
    </div>
  );
}

export default task;
