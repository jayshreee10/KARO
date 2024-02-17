import React from "react";
import ToDo from "./ToDo";
function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "0px",
        margin: "0px",
      }}
    >
      <ToDo />
    </div>
  );
}

export default App;
