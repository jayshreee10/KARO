import React from "react";

function Count() {
  return (
    <div
      style={{
        border: "2px solid gray",
        borderRadius: "20px",
        height: "90px",
        width: "300px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-around" ,
        alignItems:"centre",
        
      }}
    >
      Todo done
     
      <div
        className="TaskDone"
        style={{
          borderRadius: "70px",
          height: "70px",
          width: "70px",
          background: "red",
          textAlign:"center",
          marginTop: "10px"
        }}
      >
       <div className="counter" style={{marginTop:"25px"}}>1/3</div>
      </div>
    </div>
  );
}
export default Count;
