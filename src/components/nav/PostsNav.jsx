import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

function PostsNav({ displayPost }) {
  function displayPost1(postId) {
    // hmm how do I make it  render a BlogPost by postId?
    // I need some sort of db to store posts
    // and access App
    // ->> I pass displayPost handler from App
    // what if user wants to open post in another tab?
    // should I use router to create pages/views per post?
    // how is this usually handled?
  }
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
          <Link to="/blogpost1">blog post 1</Link>
        </li>
        {/* <li>
          <div className="btn-post" onClick={() => displayPost("post_001")}>
            blog post 1
          </div>
        </li> */}
        <li>
          <div className="btn-post" onClick={() => displayPost("post_002")}>
            blog post 2
          </div>
        </li>
      </ul>
    </div>
  );
}

PostsNav.propTypes = {};

export default PostsNav;
