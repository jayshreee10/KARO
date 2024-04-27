import React, { useState } from "react";
import appColors from "./services/colors"

function TaskBox() {

const [task,SetTask]=useState("")
function addTasks(task){
console.log (task)
}

  return (
    <div
      style={{
      //  backgroundColor :"pink",
        display: "flex",
        justifyContent: "center",
        alignItems : "center",
        width : "50vw",
        height:"10vh",
        position:"absolute",
        top:"35vh"

      }}
    >
    
        <input
          type="text"
          placeholder="Write your tasks"
          onChange={(e)=> SetTask(e.target.value)}
          style={{
            paddingLeft:"10px",
            height: "7vh",
            width: "29.7vw",
            borderRadius: "5px",
            marginLeft:"6vw",
            backgroundColor :appColors.secondary,
            border :"none",
          }}
        />
        <button className="add"
          onClick={()=>{ addTasks(task)}}
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
          -
        
        </button>
    </div>
  );
}
export default TaskBox;
