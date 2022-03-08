import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppMain from "./components/AppMain";
import Posts from "./components/pages/Posts";
import Grids from "./components/Grids";
import BEMs from "./components/BEMs";
import posts from "./posts/posts";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<AppMain post={posts[0]} />}></Route>
        <Route path="posts" element={<Posts />}></Route>
      </Route>
      <Route path="grids" element={<Grids />}></Route>
      <Route path="bems" element={<BEMs />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
