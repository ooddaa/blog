import React, { Fragment } from "react";
import BlogPost from "./BlogPost";

function AppMain({ post }) {
  return (
    // <div className="App-main">
    <Fragment>
      <BlogPost post={post} />
    </Fragment>
    // </div>
  );
}

export default AppMain;
