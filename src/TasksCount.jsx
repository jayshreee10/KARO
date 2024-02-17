import React from "react";
import appColors from "./services/colors";
function Count() {
  return (
    <div
      style={{
        border: `2px solid ${appColors.borderbox}`,
        borderRadius: "17px",
        height: "110px",
        width: "270px",
        backgroundColor: "black",
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
            fontWeight: "bolder",
            marginLeft: "3px",
          }}
        >
          Keep it up{" "}
        </h5>
      </div>
      <div
        className="TaskDone"
        style={{
          borderRadius: "75px",
          height: "75px",
          width: "75px",
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
