import { Link } from "react-router-dom";

const propTypes = {};
const defaultProps = {};

function Header(props) {
  return (
    <>
      <div className="App-header">
        <div className="header-navbar">
          <div className="header-navbar-link">
            <Link to="/">Main</Link>
          </div>
          <div className="header-navbar-link">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="header-navbar-link">
            <Link to="#">Books</Link>
          </div>
          <div className="header-navbar-link">
            <Link to="https://github.com/ooddaa">Projects</Link>
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
