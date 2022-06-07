import { Outlet } from "react-router-dom";
import MantineHeader from "./components/layout/MantineHeader";
import Footer from "./components/layout/Footer";

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
  // {
  //   link: "/playground",
  //   label: "Playground",
  // },
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
