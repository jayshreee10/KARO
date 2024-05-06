import React, { useState } from "react";
import appColors from "./services/colors";
import TaskList from "./TaskList";
import Task from "./task"

function TaskBox() {

const [task,SetTask]=useState("");
const [items,SetItems]=useState([])

function addTasks(){
  if (task!= ""){
  SetItems([...items,task])
  console.log (items)
}
}

  return (
    <div
      style={{
       backgroundColor :"pink",
        display: "flex",
        justifyContent: "center",
        alignItems : "center",
        width : "50vw",
        height:"50vh",
        // position:"absolute",
        // top:"35vh"

      }}
    >
    
        <input
          type="text"
          placeholder="Write your tasks"
          value={task}
          onChange={(e)=> SetTask(e.target.value)}
          style={{
            paddingLeft:"10px",
            height: "7vh",
            width: "29vw",
            borderRadius: "5px",
            marginLeft:"6vw",
            backgroundColor :appColors.secondary,
            border :"none",
          }}
        />
        <button className="add"
          onClick={()=>{addTasks()}}
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "30px",
            backgroundColor: appColors.primary,
            border :"none",
            color : "whitesmoke",
            display: "flex",
            justifyContent: "center",
            alignItems :"center",
            fontSize:"16px",
            fontWeight : "bold",
            marginLeft:"3vw",
            
          }}
          >
          +
        
        </button>
        
        <Task items={items}></Task>
    </div>
  );
}
export default TaskBox;
