import PropTypes from "prop-types";

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
  },
  blogSubname: {
    marginTop: "0",
    // marginTop: "10px",
    marginLeft: "10px",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "300",
  },
};

function Header(props) {
  return (
    <>
      <div className="App-header">
        <h1 style={styles.blogName}>Oda blogs</h1>
        <h4 className="amber-accent-4" style={styles.blogSubname}>
          on re-inventing the will
        </h4>
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

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
