import PropTypes from "prop-types";
import { Fragment } from "react";

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
          <span style={styles.super}>th</span> {month}, {year}
        </div>
      </div>
      <div className="main-content-body">{body}</div>
    </Fragment>
  );
  // return (
  //   // <div className="row">
  //   <div className="one-column">
  //     {/* <div className="blog-post" style={styles.blogPost}> */}
  //     <div className="blog-post-header">
  //       <h4>{header || defaultHeader}</h4>
  //       <div className="blog-date" style={styles.blogDate}>
  //         {day}
  //         <span style={styles.super}>th</span> {month}, {year}
  //       </div>
  //     </div>
  //     <div className="blog-post-content">{body}</div>
  //     {/* </div> */}
  //   </div>
  //   // </div>
  // );
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

export default BlogPost;
