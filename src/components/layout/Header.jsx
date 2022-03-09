import { Link } from "react-router-dom";

const propTypes = {};
const defaultProps = {};

const styles = {
  blogName: {
    marginTop: "0",
    marginLeft: "10px",
    marginBottom: "0",
    paddingTop: "10px",
    fontWeight: "600",
    // fontFamily: "Inter, sans-serif",
    color: "#1d0505e0",
    fontSize: "24px",
    lineHeight: "1.2",
  },
  blogSubname: {
    marginTop: "0",
    // marginTop: "10px",
    marginLeft: "10px",
    marginBottom: "20px",
    fontSize: "16px",
    fontWeight: "300",
  },
};

function Header(props) {
  return (
    <>
      <div className="App-header">
        {/* <div className="title">
          <div style={styles.blogName}>Oda blogs</div>
          <h4 className="amber-accent-4" style={styles.blogSubname}>
            on re-inventing the will
          </h4>
        </div> */}

        <div className="header-navbar">
          <div className="header-navbar-link">
            <Link to="/">Main</Link>
          </div>
          <div className="header-navbar-link">
            <Link to="/posts">Posts</Link>
          </div>
          <div className="header-navbar-link">
            <Link to="#">Books</Link>
          </div>
          <div className="header-navbar-link">
            <Link to="#">Projects</Link>
          </div>
          <div className="header-navbar-link">
            <Link to="#">Trivia</Link>
          </div>
        </div>
      </div>
    </>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
