import React from "react";
import TaskBox from "./TaskBox";
import Count from "./TasksCount";
import TaskList from "./TaskList";
function ToDo() {
  return (
    <div
      className="background"
      style={{
        backgroundColor: "black",
        height: "50vh",
        width: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Count />
      <TaskBox/>
      {/* <TaskList /> */}
    </div>
  );
}
export default ToDo;
