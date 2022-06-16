import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.tailwind.css";

import AppContent from "./components/AppContent";
import Blog from "./components/pages/Blog/Blog";
import Projects from "./components/pages/Projects";
import Welcome from "./components/pages/Welcome/Welcome.tsx";
import posts from "./components/pages/Blog/components/posts";
import Playground from "./components/pages/Playground/Playground.jsx";
import Portfolio from "./components/pages/Portfolio/Portfolio.tsx";

const stuff = (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Welcome/>}/>
      <Route exact path="/blog" element={<Blog posts={posts} />}/>
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
      <Route path="playground" element={<Playground />}></Route>
      <Route path="portfolio" element={<Portfolio />}></Route>
    </Routes>
  </BrowserRouter>
)

createRoot(document.getElementById("root")).render(stuff);
