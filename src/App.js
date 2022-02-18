import "./App.css";
import { useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppMain from "./components/AppMain";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PostsNav from "./components/nav/PostsNav";

import posts from "./posts/posts";

var db = {
  init: posts[0],
  post_001: posts[1],
  post_002: posts[2],
};

function App() {
  const [displayedPost, setDisplayedPost] = useState(db["init"]);
  function displayPost(postId) {
    setDisplayedPost(db[postId]);
  }

  return (
    <div className="App">
      <Header />
      {/* <Router> */}
      <PostsNav displayPost={displayPost} />
      {/* </Router> */}
      <AppMain post={displayedPost} />
      {/* <AppMain post={displayedPost} /> */}
      <Footer />
    </div>
  );
}

export default App;
