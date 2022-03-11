import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppContent from "./components/AppContent";
import BlogPost from "./components/pages/Blog/components/BlogPost";
import Blog from "./components/pages/Blog";
import Grids from "./components/Grids";
import BEMs from "./components/BEMs";
import welcome from "./posts/welcome";
import posts from "./posts/posts";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path=""
          element={<AppContent children={<BlogPost post={welcome} />} />}
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
