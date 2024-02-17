import React from "react";


function TaskBox() {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <form>
        <input
          type="text"
          placeholder="    write your tasks"
          style={{
            height: "30px",
            width: "250px",
            borderRadius: "20px",
            marginLeft: "5px",
          }}
        />
        <button
          style={{
            height: "30PX",
            width: "30px",
            borderRadius: "30px",
            backgroundColor: "red",
            color: "white",
            marginLeft: "10px"
          }}
        >
          +
        </button>
      </form>
    </div>
  );
}
export default TaskBox;
