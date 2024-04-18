import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import appColors from "./services/colors";
import { MdRadioButtonUnchecked } from "react-icons/md";

function TaskList() {
  return (
    <div
      style={{
        border: `2px solid ${appColors.borderbox}`,
        borderRadius: "5px",
        height: "5.5vh",
        width: "19vw",
        backgroundColor: appColors.secondary,
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems :"center",
       
      }}
    >
      {/* <MdRadioButtonUnchecked
        style={{
          border: "none",
          color: appColors.primary,
          margin : "10px"
        }}
      /> */}
      <input type="checkbox" style={{
          border: "1px solid red",
          color: appColors.primary,
          margin : "10px",
        }}/>

      <div
        style={{
          display: "flex",
          marginRight: "5px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FiEdit
          style={{ marginRight: "10px", color: "whitesmoke", height: "14px" }}
        />

        <MdDeleteOutline style={{ color: "black", color: "whitesmoke" }} />
      </div>
    </div>
  );
}
export default TaskList;
