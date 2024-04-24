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
        width : "50vw",
        height:"10vh",
        position:"absolute",
        top:"35vh"

      }}
    >
    
        <input
          type="text"
          placeholder="    write your tasks"
          style={{
            height: "7vh",
            width: "29.7vw",
            borderRadius: "5px",
            marginLeft:"6vw",
            backgroundColor :appColors.secondary,
            border :"none",
           
          }}
        />
        <button className="add"
        
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
    </div>
  );
}
export default TaskBox;
