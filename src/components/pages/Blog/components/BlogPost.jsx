import PropTypes from "prop-types";
import { Fragment } from "react";
import { resolveMonth } from "../../../../toolbox/index.js";
import { Text, Image } from "@mantine/core";
import { Span, Emoji } from "../../../../toolbox";

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
        <div className="log-post__header__title pb-8 font-bold text-6xl">
          <h1>{header || defaultHeader}</h1>

          {/* <h2>{header || defaultHeader}</h2> */}
        </div>
        <div className="blog-post__header__author">
          <Span>
            {" "}
            <Span className="oda">{author}</Span> | {day}
            <Span className="superscript">th</Span> {resolveMonth(month)},{" "}
            {year}
            <br></br>
            <Emoji>🤓</Emoji>
            <Span>reading time: {timeToRead}</Span>
            <br></br>
            <Emoji>🤔</Emoji>
            <Span>thinking time: {timeToThink}</Span>{" "}
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
