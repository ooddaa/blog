import React from "react";
import welcome from "./components/welcome";
import AppContent from "../../AppContent";

function Welcome() {
  return (
    <div className="welcome-bg-img">
      <AppContent children={<div className="welcome">{welcome.body}</div>} />
    </div>
  );
}

export default Welcome;
