const welcome = {
  id: 0,
  routeName: "welcome",
  header: "Welcome",
  subheader: "Initial subheader",
  dateCreated: [2022, 3, 6],
  author: "oda",
  body: (
    <>
      <p className="pb--1rem">
        Lorem, world! I am <span className="oda">oda</span> and this is my
        personal website. I am going to use it as a tool to learn new skills and
        not forget what I already learned.
      </p>

      <p className="pb--1rem">
        Reinventing the wheel is my hobby, so is reading and breathing.
      </p>

      <p className="pb--1rem">
        Over the past I have accumulated a bunch of googlesheets, notes, some
        genius business ideas ($1bln++ each), uncountable half-finished projects
        and trivia. I would like to put all that in one place and may be come
        across like-minded individuals. Or just de-clutter the back of my mind a
        bit.
      </p>

      <p className="pb--1rem">
        So this blog is now officially comissioned as my personal idea dumpster
        and virtual lab. Feel free to poke around.
      </p>

      <p className="pb--1rem">I also like BJJ.</p>

      <pre>
        <code>
          <span style={{ color: "green" }}>
            // surely there's a better way to do this
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
export default welcome;
