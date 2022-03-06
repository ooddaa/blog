import React from "react";
import { Link } from "react-router-dom";
import posts from "../../posts/posts";
import PropTypes from "prop-types";

const styles = {
  main: {
    // marginTop: "150px",
    // marginLeft: "20px",
    // marginRight: "20px",
    // padding: "20px",
    // paddingTop: "0",
  },
};
function PostsNav({ displayPost }) {
  return (
    <div className="posts-nav" style={styles.main}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/${post.routeName}`}>{post.header}</Link>
        </li>
      ))}
    </div>
  );
}

PostsNav.propTypes = {};

export default PostsNav;
