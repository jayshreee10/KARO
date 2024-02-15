import React from "react";

function TaskBox() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "50px",
        width: "300px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <form>
        <input type="text" placeholder="write your tasks" />
        <button
          style={{
            height: "30PX",
            width: "30px",
            borderRadius: "30px",
            backgroundColor: "red",
            color: "white",
            marginLeft: "10px",
          }}
        >
          +
        </button>
      </form>
    </div>
  );
}
export default TaskBox;
