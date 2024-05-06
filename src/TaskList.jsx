import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import appColors from "./services/colors";

function TaskList(props) {
  const data = props.data;
//  data.map((todo) => <li key={todo.toString()}>{todo}</li>);

  return (
    <div
      style={{
        border: `2px solid ${appColors.borderbox}`,
        borderRadius: "5px",
        height: "7vh",
        width: "30vw",
        backgroundColor: appColors.secondary,
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // position: "absolute",
        // top: "10vh",
      }}
    >
      <div
        style={{
          color: appColors.primary,
          margin: "10px",
        }}
      >
      {data}
      </div>

      <div
        style={{
          display: "flex",
          marginRight: "5px",
          alignItems: "center",
          justifyContent: "center",
          top: "40vh",
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
