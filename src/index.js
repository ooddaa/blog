import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppMain from "./components/AppMain";
import Grids from "./components/Grids";
import posts from "./posts/posts";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {posts.map((post) => (
          <Route
            path={post.routeName}
            element={<AppMain post={post} />}
            key={post.id}
          ></Route>
        ))}
      </Route>
      <Route path="grids" element={<Grids />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
