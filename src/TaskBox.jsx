import React from "react";
import appColors from "./services/colors"

function TaskBox() {
  return (
    <div
      style={{
      //  backgroundColor :"pink",
        display: "flex",
        justifyContent: "center",
        alignItems : "center",
        width : "27vw",
        height:"10vh",
  

      }}
    >
    
        <input
          type="text"
          placeholder="    write your tasks"
          style={{
            height: "5.5vh",
            width: "19vw",
            borderRadius: "5px",
            marginLeft:"3vw",
            backgroundColor :appColors.secondary,
            border :"none"
          }}
        />
        <button className="add"
        
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "30px",
            backgroundColor: appColors.primary,
            border :"none",
            color : "whitesmoke",
            display: "flex",
            justifyContent: "center",
            alignItems :"center",
            fontSize:"16px",
            fontWeight : "bold",
            marginLeft:"1vw",
            
          }}
          >
          +
        
        </button>
    </div>
  );
}
export default TaskBox;
