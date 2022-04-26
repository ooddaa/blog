import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.tailwind.css";

import AppContent from "./components/AppContent";
import Blog from "./components/pages/Blog/Blog";
import Projects from "./components/pages/Projects";
import Welcome from "./components/pages/Welcome/Welcome";
import posts from "./components/pages/Blog/components/posts";
import Playground from "./components/pages/Playground/Playground.jsx";

const stuff = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Welcome />}></Route>
        {/* Create Routes for all posts, as we want each to have its own link -> user can open posts in tabs */}
        <Route path="blog" element={<Blog posts={posts} />}></Route>
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
      </Route>
      <Route path="playground" element={<Playground />}></Route>
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(stuff);
