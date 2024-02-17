import React from "react";
import ToDo from "./ToDo";
import "./App.css";
function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems : "center",

      }}
    >
      <ToDo />
    </div>
  );
}

export default App;
