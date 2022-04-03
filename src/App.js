import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import MantineHeader from "./components/layout/MantineHeader";
import Footer from "./components/layout/Footer";
import { Link } from "react-router-dom";

const links = [
  {
    link: "/",
    label: "Main",
  },
  {
    // link: <Link to="/blog">Blog</Link>,
    link: "/blog",
    label: "Blog",
  },
  {
    link: "/projects",
    label: "Projects",
  },
];

function App() {
  return (
    <div className="wrapper">
      <MantineHeader links={links} />
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
