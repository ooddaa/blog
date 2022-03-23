import PropTypes from "prop-types";
import { Fragment } from "react";
import { resolveMonth } from "../../../../toolbox/index.js";

const propTypes = {
  defaultHeader: PropTypes.string,
  post: PropTypes.object,
};
const defaultProps = {
  defaultHeader: "Default Header",
};

function BlogPost({ post, defaultHeader }) {
  const { header, subheader, dateCreated, body, author } = post;
  const [year, month, day] = dateCreated;
  return (
    <>
      <div className="blog-post-content-header">
        <div className="blog-post-title">
          <h1>{header || defaultHeader}</h1>
          
          {/* <h2>{header || defaultHeader}</h2> */}
        </div>
        <div className="blog-post-author">
          by <span className="oda">{author}</span> on {day}
          <span className="superscript">th</span> {resolveMonth(month)}, {year}
        </div>
      </div>
      <div className="blog-post-content-body">{body}</div>
    </>
  );
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

export default BlogPost;
