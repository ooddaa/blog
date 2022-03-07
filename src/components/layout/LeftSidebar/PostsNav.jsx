import React from "react";
import { Link } from "react-router-dom";
import posts from "../../../posts/posts";
import PropTypes from "prop-types";


function PostsNav({ displayPost }) {
  return (
    <div className="posts-nav">
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
