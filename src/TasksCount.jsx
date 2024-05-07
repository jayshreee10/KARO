import React from "react";
import appColors from "./services/colors";
function Count() {
  return (
    <div style={{height:"25vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div
        style={{
          border: `2px solid ${appColors.borderbox}`,
          borderRadius: "12px",
          height: "20vh",
          width: "29vw",
          // backgroundColor:"blue",
          color: "white",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <h3>Tasks Done</h3>{" "}
          <h5
            style={{
              color: appColors.borderbox,
              // fontWeight: "",
              marginLeft: "3px",
            }}
          >
            Keep it up{" "}
          </h5>
        </div>
        <div
          className="TaskDone"
          style={{
            borderRadius: "50%",
            height: "14vh",
            width: "7vw",
            background: "red",
            textAlign: "center",
            // marginTop: "15px"
          }}
        >
          <div className="counter" style={{ marginTop: "40px" }}>
            1/3
          </div>
        </div>
      </div>
    </div>
  );
}
export default Count;
