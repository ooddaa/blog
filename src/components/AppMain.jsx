import React from "react";
import BlogPost from "./BlogPost";

function AppMain({ post }) {
  return (
    <div className="App-main">
      <BlogPost post={post} />
    </div>
  );
}

export default AppMain;
