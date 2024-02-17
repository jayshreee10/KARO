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
        borderRadius: "7px",
        height: "35px",
        width: "270px",
        backgroundColor: appColors.secondary,
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems :"center"
      }}
    >
      <MdRadioButtonUnchecked
        style={{
          border: "none",
          color: appColors.primary,
          margin : "10px"
        }}
      />
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
