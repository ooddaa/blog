import "./App.css";
import { useState } from "react";
import AppMain from "./components/AppMain";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PostsNav from "./components/nav/PostsNav";

const post1 = {
  header: "Post 1",
  date: [2022, 2, 9],
  body: (
    <>
      <p>
        Lorem, world! I am <span style={{ color: "#ff6f00" }}>oda</span> and
        this is my first (actually, second!) blog. I am going to use it as a
        tool to learn new skills and not forget what I already learned.
      </p>

      <p>Reinventing the wheel is my hobby, so is reading and breathing.</p>
      <p>
        Over the past I have accumulated a bunch of googlesheets, notes, genius
        (arguably) business ideas, half-finished projects and trivia, which I
        would like to put in one place and may be come across like-minded
        individuals.
      </p>

      <h4>
        So this blog is now officially comissioned as my personal idea dumpster
        and virtual lab. Feel free to poke around.
      </h4>

      <p>I also like BJJ.</p>

      <pre>
        <code>
          <span style={{ color: "green" }}>
            // surely there's a better way to do
          </span>
          <br />
          <span style={{ color: "blue" }}>const</span> a = 1;
          <br />
          <span style={{ color: "blue" }}>function</span>{" "}
          <span style={{ color: "orange" }}>fun</span>() {`{`};
          <br />
          <span style={{ color: "blue" }}> let</span> smth = 0;
          <br />
          <span style={{ color: "purple" }}> return</span> 0;
          <br />
          {`}`}
          <br />
          <span style={{ color: "green" }}>// than like this</span>
          <br />
          {`<pre>
  <code>
  <span style={{ color: "green" }}>
  // surely there's a better way to do this
  </span>
  <br />
  <span style={{ color: "blue" }}>const</span> a = 1;
  <br />
  <span style={{ color: "blue" }}>function</span>{" "}
  <span style={{ color: "orange" }}>fun</span>() {\`{\`};
  <br />
  <span style={{ color: "blue" }}> let</span> smth = 0;
  <br />
  <span style={{ color: "purple" }}> return</span> 0;
  <br />
  {\`}\`}
  <span style={{ color: "green" }}>
  // than
  </span>
  <br />
  </code>
  </pre>`}
        </code>
      </pre>
    </>
  ),
};
const post2 = {
  header: "Post 2",
  date: [2022, 2, 10],
  body: (
    <>
      <p>POST NUMBER 2</p>
    </>
  ),
};

const db = {
  post_001: post1,
  post_002: post2,
};

function App() {
  const [displayedPost, setDisplayedPost] = useState(db.post_001);
  function displayPost(postId) {
    setDisplayedPost(db[postId]);
  }
  return (
    <div className="App">
      <Header />
      <PostsNav displayPost={displayPost} />
      <AppMain post={displayedPost} />
      <Footer />
    </div>
  );
}

export default App;
