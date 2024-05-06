import React from "react";
import TaskBox from "./TaskBox";
import Count from "./TasksCount";

function ToDo() {
  return (
    <div
      className="background"
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Count />
      <TaskBox/>
    </div>
  );
}
export default ToDo;
