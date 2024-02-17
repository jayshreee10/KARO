import React from "react";
import appColors from "./services/colors"

function TaskBox() {
  return (
    <div
      style={{
       backgroundColor :"black",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems : "center",
        width : "300px"
      }}
    >
    
        <input
          type="text"
          placeholder="    write your tasks"
          style={{
            height: "30px",
            width: "220px",
            borderRadius: "10px",
            marginLeft:"10px",
            backgroundColor :appColors.secondary,
            border :"none"
          }}
        />
        <div
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "30px",
            backgroundColor: "red",
            backgroundColor: appColors.primary,
            border :"none",
            color : "whitesmoke",
            display: "flex",
            justifyContent: "center",
            alignItems :"center",
            fontSize:"15px",
            fontWeight : "bolder"
            
          }}
        >
          +
        </div>
     
    </div>
  );
}
export default TaskBox;
