import PropTypes from "prop-types";

const propTypes = {};
const defaultProps = {};

function BlogTitle(props) {
  return (
    <>
      <div className="blog-title">
        <div className="main">Oda blogs</div>
        <div className="amber-accent-4 subtitle">
          on re-inventing the will
        </div>
      </div>
      {/* <div className="header-navbar">
        <button className="header-navbar-btn">one</button>
        <button className="header-navbar-btn">two</button>
        <button className="header-navbar-btn">three</button>
        <button className="header-navbar-btn">four</button>
      </div> */}
    </>
  );
}

BlogTitle.propTypes = propTypes;
BlogTitle.defaultProps = defaultProps;

export default BlogTitle;
