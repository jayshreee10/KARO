import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
function TaskList() {
  return (
    <div
      style={{
        borderRadius: "10px",
        height: "40px",
        width: "300px",
        backgroundColor: "gray",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="check" style={{ margin: "5px" }}>
        <input type="checkbox" />
        Task
      </div>
      <div
        style={{
          display: "flex",
          height: "20px",
          marginRight: "5px",
          marginTop: "10px",
        }}
      >
        <AiFillEdit style={{ marginRight: "10px", color: "black" }} />

        <AiTwotoneDelete style={{ color: "black" }} />
      </div>
    </div>
  );
}
export default TaskList;
