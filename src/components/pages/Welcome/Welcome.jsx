import React from "react";
import welcome from "./components/welcome";

const myStyle = {
  paddingTop: "100px",
  paddingBottom: "100px",
};

function Welcome() {
  return (
    <div className="welcome" style={myStyle}>
      {welcome.body}
    </div>
  );
}

export default Welcome;
