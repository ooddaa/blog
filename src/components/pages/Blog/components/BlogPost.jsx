import PropTypes from "prop-types";
import { Fragment } from "react";
import { resolveMonth } from "../../../../toolbox/index.js";
import { Text, Image } from "@mantine/core";
import { Span } from "../../../../toolbox";

const propTypes = {
  defaultHeader: PropTypes.string,
  post: PropTypes.object,
};
const defaultProps = {
  defaultHeader: "Default Header",
};

function BlogPost({ post, defaultHeader }) {
  const {
    header,
    subheader,
    dateCreated,
    body,
    author,
    timeToRead,
    timeToThink,
  } = post;
  const [year, month, day] = dateCreated;
  return (
    <div className="blog-post">
      <div className="blog-post__header">
        <div className="log-post__header__title">
          <h1>{header || defaultHeader}</h1>

          {/* <h2>{header || defaultHeader}</h2> */}
        </div>
        <div className="blog-post__header__author">
          <Span>
            {" "}
            by <Span className="oda">{author}</Span> on {day}
            <Span className="superscript">th</Span> {resolveMonth(month)},{" "}
            {year}
            <br></br>
            <Span>🤓 reading time: {timeToRead}</Span>
            <br></br>
            <Span>🤔 thinking time: {timeToThink}</Span>{" "}
          </Span>
        </div>
      </div>
      <div className="blog-post__body">{body}</div>
    </div>
  );
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

export default BlogPost;
