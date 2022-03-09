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
    paddingTop: "20px",
  },
  super: {
    verticalAlign: "super",
    fontSize: "1rem",
  },
};

function BlogPost({ post, defaultHeader }) {
  const { header, subheader, dateCreated, body, author } = post;
  const [year, month, day] = dateCreated;
  return (
    <>
      <div className="content-header">
        <h4 className="blog-post-title">{header || defaultHeader}</h4>
        <div className="blog-post-author">
          by <span className="oda">{author}</span> on {day}
          <span className="superscript">th</span> {resolveMonth(month)}, {year}
        </div>
      </div>
      <div className="content-body">{body}</div>
    </>
  );
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

export default BlogPost;

// import PropTypes from "prop-types";
// import { resolveMonth } from "../toolbox/index.js";
// import clsx from "clsx";

// const propTypes = {
//   defaultHeader: PropTypes.string,
//   post: PropTypes.object,
// };
// const defaultProps = {
//   defaultHeader: "Default Header",
// };
// const styles = {
//   blogPost: {
//     paddingTop: "20px",
//   },
//   super: {
//     verticalAlign: "super",
//     fontSize: "1rem",
//   },
// };
// function BlogPost({ post, defaultHeader, layoutType }) {
//   const { header, subheader, dateCreated, body, author } = post;
//   const [year, month, day] = dateCreated;
//   return (
//     // <div className="page-content">
//     <div className={clsx("page-content", layoutType)}>
//       <div className="content-header">
//         <h4 className="blogpost-title">{header || defaultHeader}</h4>
//         <div className="blog-author">
//           by <span style={{ color: "#ff6f00" }}>{author}</span> on {day}
//           <span style={styles.super}>th</span> {resolveMonth(month)}, {year}
//         </div>
//       </div>
//       <div className="content-body">{body}</div>
//     </div>
//   );
// }

// BlogPost.propTypes = propTypes;
// BlogPost.defaultProps = defaultProps;

// export default BlogPost;
