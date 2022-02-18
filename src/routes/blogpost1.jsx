import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PostsNav from "../components/nav/PostsNav";
import AppMain from "../components/AppMain";

import posts from "../posts/posts";

function Blogpost1() {
  return (
    <div className="App">
      <Header></Header>
      <PostsNav></PostsNav>
      <AppMain post={posts[1]} />
      <Footer></Footer>
    </div>
  );
}

export default Blogpost1;
