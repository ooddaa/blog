import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppContent from "./components/AppContent";
import Blog from "./components/pages/Blog/Blog";
import Projects from "./components/pages/Projects";
import Grids from "./components/Grids";
import BEMs from "./components/BEMs";
import Welcome from "./components/pages/Welcome/Welcome";
import posts from "./components/pages/Blog/components/posts";
import Trivia from "./components/pages/Trivia/Trivia";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path=""
          element={<Welcome />}
          // element={<AppContent children={<Welcome />} />}
        ></Route>
        {/* Create Routes for all posts, as we want each to have its own link -> user can open posts in tabs */}
        <Route
          path="blog"
          element={<AppContent children={<Blog posts={posts} />} />}
        ></Route>
        {posts.map((post, idx) => {
          return (
            <Route
              key={post.id}
              path={`blog/${post.routeName}`}
              element={
                <AppContent children={<Blog posts={posts} postId={idx} />} />
              }
            ></Route>
          );
        })}
        <Route
          path="projects"
          element={<AppContent children={<Projects />} />}
        ></Route>
        <Route path="trivia" element={<Trivia />}></Route>
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
