import { Fragment } from "react";
import BlogPost from "./BlogPost";

function AppMain({ post }) {
  return (
    <Fragment>
      <BlogPost post={post} />
    </Fragment>
  );
}

export default AppMain;
