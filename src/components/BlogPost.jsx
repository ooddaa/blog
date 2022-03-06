import PropTypes from "prop-types";
import { Fragment } from "react";
import { resolveMonth } from "../toolbox/index.js";

const propTypes = {
  defaultHeader: PropTypes.string,
  post: PropTypes.object,
};
const defaultProps = {
  defaultHeader: "Default Header",
};
const styles = {
  blogPost: {
    // marginTop: "20px",
    paddingTop: "20px",
  },
  blogDate: {
    marginBottom: "20px",
    color: "grey",
    textAlign: "right",
    fontWeight: "300",
    // fontStyle: "italic",
  },
  super: {
    verticalAlign: "super",
    fontSize: "1rem",
  },
};
function BlogPost({ post, defaultHeader }) {
  const { header, dateCreated, body } = post;
  const [year, month, day] = dateCreated;
  return (
    <Fragment>
      <div className="main-content-header">
        <h4>{header || defaultHeader}</h4>
        <div className="blog-date" style={styles.blogDate}>
          {day}
          <span style={styles.super}>th</span> {resolveMonth(month)}, {year}
        </div>
      </div>
      <div className="main-content-body">{body}</div>
    </Fragment>
  );
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

export default BlogPost;
