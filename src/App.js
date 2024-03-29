import { Outlet } from "react-router-dom";
import MantineHeader from "./components/layout/MantineHeader";
import Footer from "./components/layout/Footer";
// import {Prism as PrismRenderer} from 'prism-react-renderer';

// (typeof global !== 'undefined' ? global : window).Prism = PrismRenderer;
// import('prismjs/components/prism-elixir');

const links = [
  {
    link: "/",
    label: "Main",
  },
  {
    link: "/blog",
    label: "Blog",
  },
  {
    link: "https://github.com/ooddaa",
    label: "Github",
  },
  {
    link: "/portfolio",
    label: "Portfolio",
  },
];

function App() {
  return (
    <div className="app wrapper" style={{ backgroundColor: "rgb(250, 251, 253)" }}>
      <MantineHeader links={links} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
