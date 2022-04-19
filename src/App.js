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
    label: "Projects",
  },
  {
    link: "/playground",
    label: "Playground",
  },
];

function App() {
  // return <h1 className="text-3xl underline">Hello world!</h1>;
  return (
    <div className="wrapper">
      <MantineHeader links={links} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
