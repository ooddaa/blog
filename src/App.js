import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PostsNav from "./components/nav/PostsNav";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <PostsNav />
      <Footer />
    </div>
  );
}

export default App;
