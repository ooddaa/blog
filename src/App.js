// import "./App.css";
import { Outlet } from "react-router-dom";
import BlogTitle from "./components/layout/BlogTitle";
import Footer from "./components/layout/Footer";
import PostsNav from "./components/nav/PostsNav";
import { Fragment } from "react";

function App() {
  return (
    <Fragment> 
    <div className="App">
      <BlogTitle />
      <Outlet />
      <PostsNav />
    </div>
    <Footer />
    </Fragment>   
  );
}

export default App;
