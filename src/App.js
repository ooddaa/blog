import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
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
    link: "/trivia",
    label: "Trivia",
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
