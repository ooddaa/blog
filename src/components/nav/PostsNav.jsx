import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PostsNav({ displayPost }) {
  return (
    <div className="posts-nav">
      {/* <h4>posts</h4> */}
      <ul className="posts-list">
        {
          <li>
            <a href="https://codepen.io/ooddaa/pen/OJORwEm">
              codepen shoes with grid
            </a>
          </li>
        }

        <li>
          <a href="https://docs.google.com/spreadsheets/d/1aPB-q2HFhkqob-1v1u95DHjRBTpfAx-jJsQHrj7d7cA/edit?usp=sharing">
            my css google sheet
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/spreadsheets/d/1kRWGjXZIwcq7cgv6hyTqgi5hlL64_wULO8utvODtXuk/edit?usp=sharing">
            react google sheet, for good measure
          </a>
        </li>
        <li>
          <Link to="/">Initial post</Link>
        </li>
        <li>
          <Link to="/blogpost1">blog post 1</Link>
        </li>
        <li>
          <Link to="/blogpost2">blog post 2</Link>
        </li>
      </ul>
    </div>
  );
}

PostsNav.propTypes = {};

export default PostsNav;
