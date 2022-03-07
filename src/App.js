// import "./App.css";
import { Outlet } from "react-router-dom";

import Footer from "./components/layout/Footer";

import LeftSidebar from "./components/layout/LeftSidebar/LeftSidebar";
import { Fragment } from "react";

function App() {
  return (
    <Fragment> 
    <div className="App-wrapper">
      <div className="main-container">
      <LeftSidebar />
      <Outlet />
     </div>
    </div>
    <Footer />
    </Fragment>   
  );
}

export default App;
