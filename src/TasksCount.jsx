import React from "react";
import appColors from "./services/colors";
function Count() {
  return (
    <div
      style={{
        border: `2px solid ${appColors.borderbox}`,
        borderRadius: "12px",
        height: "20vh",
        width: "29vw",
        // backgroundColor: "pink",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        position:"absolute",
        top:"9vh"
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
          height: "13.5vh",
          width: "7vw",
          background: "red",
          textAlign: "center",
          // marginTop: "15px"
        }}
      >
        <div className="counter" style={{ marginTop: "25px" }}>
          1/3
        </div>
      </div>
    </div>
  );
}
export default Count;
