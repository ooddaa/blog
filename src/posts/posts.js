import { reverseString } from "../toolbox/index.js";

const posts = [
  {
    id: 0,
    routeName: "",
    header: "Welcome",
    subheader: "Initial subheader",
    dateCreated: [2022, 3, 6],
    author: "oda",
    body: (
      <div className="post-body">
        <p>
          Lorem, world! I am <span style={{ color: "#ff6f00" }}>oda</span> and
          this is my first (actually, second!) blog. I am going to use it as a
          tool to learn new skills and not forget what I already learned.
        </p>

        <p>Reinventing the wheel is my hobby, so is reading and breathing.</p>
        <p>
          Over the past I have accumulated a bunch of googlesheets, notes,
          genius (arguably) business ideas, half-finished projects and trivia,
          which I would like to put in one place and may be come across
          like-minded individuals.
        </p>

        <h4>
          So this blog is now officially comissioned as my personal idea
          dumpster and virtual lab. Feel free to poke around.
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
      </div>
    ),
  },
  {
    id: 1,
    routeName: "blogpost1",
    header: "Post 1",
    subheader: "Post 1 subheader",
    dateCreated: [2022, 2, 10],
    author: "oda",
    body: (
      <div className="post-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
      </div>
    ),
  },
  {
    id: 2,
    routeName: "blogpost2",
    header: "Post 2",
    subheader: "post 2 subheader",
    dateCreated: [2022, 2, 10],
    author: "hehe",
    body: (
      <div className="post-body">
        <p>
          {reverseString(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!`)}
        </p>
        <p>
          {reverseString(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!`)}
        </p>
        <p>
          {reverseString(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!`)}
        </p>
        <p>
          {reverseString(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!`)}
        </p>
        <p>
          {reverseString(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!`)}
        </p>
        <p>
          {reverseString(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!`)}
        </p>
      </div>
    ),
  },
];

export default posts;
