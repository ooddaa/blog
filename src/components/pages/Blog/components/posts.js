import {
  Span,
  Bold,
  Super,
  GradientSpan,
  JS,
  Emoji,
  H3,
  H2,
  P,
  PB8,
  TLDR,
} from "../../../../toolbox/index.js";
import { Code, Text, Blockquote, Center } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { Link } from "react-router-dom";

const codeSnippet = `const a = 1;
function fun() {
 let smth = 0;
 return smth;
}`;

const stub = {
  id: 0,
  routeName: "routeName",
  header: "header",
  subheader: "subheader",
  dateCreated: [2022, 2, 10],
  author: "author",
  timeToRead: "timeToRead",
  timeToThink: "timeToThink",
  tags: [],
  body: <Text className="leading-7"></Text>,
};

const posts = [
  {
    id: 1,
    routeName: "setting-up-yahoo-prices-api-on-heroku",
    header: "Setting up Yahoo Prices API on Heroku",
    subheader: "Without the docs, it's unusable.",
    dateCreated: [2022, 3, 5],
    timeToRead: "2 min",
    timeToThink: "10 min",
    author: "oda",
    tags: [
      "python",
      "api",
      "postman",
      "heroku",
      "documentation",
      "yahoo finance",
      "options trading",
      "Interactive Brokers",
    ],
    body: (
      <Text className="leading-7">
        <p>
          Ok, so my dear wife, K, needed US stocks prices to be added to her
          option trading log, which she runs on Google Sheets.
        </p>
        <p>
          K, after a hard trading day, copy-pastes her option combos, strangles
          and whatnot data to Sheets from Interactive Brokers' TWS.
          Unfortunately, IB's option trade reports do not come with a precise
          price of the underlying at the moment of option trade's execution.
        </p>
        <div className="pb--1rem">Let's say she has this record:</div>
        <div className="pb--1rem">
          <Code block>
            AMD ??? 19/11/2020 11:43:35 BTO LONG CALL +3 AMD NOV27'20 93 CALL
            0.57 3.59
          </Code>
        </div>
        <p>
          It would be handy to know how much AMD traded for at 11:43:35 on
          November 19, 2020, right? Ok, maybe we aren't that fastidious, and can
          round time to 11:43.
        </p>
        <p>
          If so, then the easiest way to get stock prices is to use YahooPrices
          API. ...of which no documentation in human-readable format exists...
        </p>
        <p>
          Ran Aroussi published a nice Python module - yfinance. Many thanks,
          Ran! We are going to use this module to set up our simple Yahoo Prices
          API on Heroku.
        </p>
        <div className="pb--1rem">
          <strong>My initial logic was to:</strong>
        </div>
        <div className="pb--3rem">
          <ol>
            <li>launch a Python Yahoo Prices API on Heroku,</li>
            <li>call it from the Sheets and</li>
            <li>
              automatically update K's trading logs with underlying prices.
            </li>
          </ol>
        </div>

        <div className="pb--1rem">
          The API is now accessible on{" "}
          <a href="https://yahooprices.herokuapp.com">Heroku</a>. To use it -
          simply POST with an application/json body set as follows:
        </div>
        <div className="pb--2rem">
          <Code block>{`{ "data": Ticker[] }`}</Code>
        </div>
        <div className="pb--1rem">Where each Ticker is:</div>
        <div className="pb--2rem">
          <Code block language="python">{`[
    ticker: str, 
    # price may be skipped for POST request, add null in Postman
    price: null, 
    # at the moment of writing this post, it's hard to remember
    # why I split time into two lists like this.         
    [
      year:int, 
      month:int, 
      day:int
    ], 
    [
      hour:int, 
      min:int, 
      sec:int
    ]
]`}</Code>
        </div>
        <div className="pb--1rem">
          If it all goes right, Yahoo Prices API will add a
        </div>
        <div className="pb--1rem">
          <Code block>price: float</Code>
        </div>
        <div className="pb--2rem">to each Ticker.</div>

        <div className="three-days-later pb--2rem">
          <img
            className="rounded-lg"
            src="/img/3dayslater.jpeg"
            alt="Some time has passed"
          />
        </div>
        <p>
          As I am writing this, a month has passed since I launched the stuff
          above, and I hardly can remember how things were arranged!
        </p>
        <div className="pb--1rem">
          I am sending a POST request with Postman to{" "}
          <a href="https://yahooprices.herokuapp.com">Heroku</a> with a proper
          JSON:
        </div>
        <div className="pb--1rem">
          <Code block>
            {`{ 
    "data": [
        ["AMD", null, [2022, 3, 10], [15, 0, 0]]
    ]
}`}
          </Code>
        </div>
        <div className="pb--2rem">
          But get a{" "}
          <a href="https://www.lifewire.com/500-internal-server-error-explained-2622938">
            500 Internal Server Error
          </a>{" "}
          response, which is 😬
        </div>

        <div className="pb--1rem">Let's investigate, shall we 🕵🏻‍♂️</div>
        <div className="pb--2rem">
          <Code block>$ heroku logs -app=yahooprices --tail</Code>
        </div>

        <div className="pb--1rem">
          Lo and behold, we've got ourselves a bug!
        </div>
        <div className="yahoo-prices-bug pb--2rem">
          <img
            className="rounded-lg"
            src="/img/ypb.png"
            alt="Screenshot of Heroku logs"
          />
        </div>
        <div className="pb--1rem">🤔 ???</div>
        <div className="pb--1rem">
          Ah yes, it all comes back to me now - the last feature that I added
          was to allow for all prices from the query to be returned as part of
          the response. Then users could sort themselves out should the main
          timestamp not be available. I did it by adding a new route:
        </div>
        <div className="pb--2rem">
          <Code block>
            <strong>POST</strong> https://yahooprices.herokuapp.com/allPrices
          </Code>
        </div>

        <div className="pb--1rem">
          But in so doing, I forgot to set a default value to the new argument
        </div>
        <div className="pb--1rem">
          <Code block>attach_prices=False</Code>
        </div>
        <div className="pb--1rem">
          of the underlying function that handles data requests for both routes.
          I should have done like this:
        </div>
        <div className="pb--1rem">
          <Code block>
            {`# yahoo.py 
def get_prices(tickers, attach_prices=False): ...`}
          </Code>
        </div>

        <div className="pb--1rem">Now, when users call the old route:</div>
        <div className="pb--1rem">
          <Code block>
            <strong>POST</strong> https://yahooprices.herokuapp.com/
          </Code>
        </div>

        <div className="pb--1rem">they get</div>

        <div className="pb--3rem">
          <Code block>
            {`{
    "data": [
        [
            "AMD",
            105.810302734375,
            [
                2022,
                3,
                10
            ],
            [
                15,
                0,
                0
            ]
        ]
    ]
}`}
          </Code>
        </div>

        <H3>I'll have a takeaway, please 🍟 </H3>
        <div className="pb--3rem">
          <ol>
            <li>Write more WHY-comments in your code.</li>
            <li>Set sensible defaults.</li>
            <li>Test all the time.</li>
          </ol>
        </div>
      </Text>
    ),
  },
  {
    id: 2,
    routeName: "git-stash",
    header: "git stash to the rescue",
    subheader:
      "Haven't thought it through before making changes on this branch? No biggie - git stash it!",
    dateCreated: [2022, 3, 12],
    author: "oda",
    timeToRead: "3 min",
    timeToThink: "4.5 min",
    tags: ["git"],
    body: (
      <Text className="leading-7">
        <TLDR>
          If you practice everyone's favourite{" "}
          <Bold>
            <i>code first - think later</i>
          </Bold>{" "}
          approach, then these are your best friends:
          <div className="pt-4">
            <ul>
              <li>
                <Code>git stash</Code>
              </li>
              <li>
                <Code>git stash list</Code>
              </li>
              <li>
                <Code>git stash pop</Code>
              </li>
            </ul>
          </div>
        </TLDR>

        <H3>My workflow</H3>
        <PB8>
          Sometimes I struggle with keeping my coding organised. My projects are
          fair game for me - I can touch any part of it whenever I want. Which
          produces convoluted coding sessions.
        </PB8>

        <PB8>
          Which more often than not creates a lot of unnecessary code
          re-writing. Or, even more often, after I wrote something, I realise
          that it logically belongs to another branch.
        </PB8>

        <div className="pb--1rem">
          If there is <span className="text-lg font-bold">NO</span> other
          branch, I simply
        </div>

        <JS colorScheme="dark" noCopy classNames="pb-8">
          {`$ git checkout -b newBranch
$ git commit -am "stuff that should be on newBranch"`}
        </JS>

        <div className="pb--1rem">
          If there <span className="text-lg font-bold">IS</span> the other
          branch that logically owns the changes, no biggie,{" "}
          <Code>git stash</Code> to the rescue!
        </div>

        <JS colorScheme="dark" noCopy classNames="pb-8">
          {`$ git stash       // all changes on current branch are 
                  // reverted, equals to git reset --hard
$ git checkout anotherBranch
$ git stash list  // shows us the stack of stash@{number}: WIP on <branchName>: <branchHash> <branchComment>
$ git stash pop   // there might be some conflicts for manual resolution, 
                  // I accept all incoming (stashed) changes
$ git commit -am "stuff that should have been on anotherBranch"`}
        </JS>

        <H3>Voila! </H3>
        <div>
          We now have appropriately positioned and accounted for our code. 🥳
        </div>
      </Text>
    ),
  },
  {
    id: 3,
    routeName: "how-i-stopped-worrying-and-started-to-love-open-source",
    header: "How I stopped worrying and started to love open source",
    subheader: "post 3 subheader",
    dateCreated: [2022, 3, 23],
    author: "oda",
    timeToRead: "3 min",
    timeToThink: "3 min",
    tags: ["open source", "GitHub", "BitBucket", "git push"],
    body: (
      <Text className="leading-7">
        <div className="blog-post__body__tldr">
          <div className="pb--2rem">
            <Span
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              weight={600}
            >
              TL/DR:{" "}
            </Span>
            Transition between hoarding behaviour and open source (in my case
            private Bitbucket vs public GitHub) - takes a mindshift. The
            question boils down to the famous quote from Aristotel:
          </div>
          <Blockquote className="pb--3rem" cite="- Aristotel">
            Do I want to be a better developer/coder/programmer/professional?
          </Blockquote>
          <div className="pb--1rem">
            If the answer is{" "}
            <Span
              variant="gradient"
              gradient={{ from: "green", to: "lime", deg: 45 }}
              weight={600}
            >
              YES
            </Span>{" "}
            - go public. If the answer is{" "}
            <Span
              variant="gradient"
              gradient={{ from: "red", to: "pink", deg: 45 }}
              weight={600}
            >
              {" "}
              NO{" "}
            </Span>
            - stick with a private repo.
          </div>
        </div>

        <H3>Public vs Private</H3>
        <p>
          Since the beginning of my coding hobby, in 2012, I was under the
          impression that what I code matters. Not that I would be able to put
          my finger on how exactly it mattered or why. Or why I was so sure that
          anyone would ever spend any of their valuable time
          reading/stealing/using my precious code.
        </p>
        <div className="pb-12">
          Uploading my work to a public place changes how I think about the
          quality of my work. I have three rules:
        </div>
        <div className="pb-12">
          <ol>
            <li className="pb-12">
              <div className="pb--1rem">
                <Span
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                  weight={600}
                >
                  To push is better than to hoard.{" "}
                </Span>
              </div>
              Pushing to main branch forces me to focus on solving an issue
              within the restricted timespan (I like those green commits, I do).
              But at the same time I realise I don't want to push garbage, so a
              this becomes a battle against{" "}
              <strong>Unrelenting Standards</strong> (ie "it's better now and
              imperfect than perfect and never").
            </li>

            <li className="pb-12">
              <div className="pb--1rem">
                <Span
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "green", to: "yellow", deg: 45 }}
                  weight={600}
                >
                  To write documentation is better than to write code.{" "}
                </Span>
              </div>
              <div className="pb--1rem">
                I want my work to be something that I am proud of. The only sure
                way to get there for me is to incrementally improve on my work.
                Since "incrementally" means "step by step over time" - I ran
                into the old{" "}
                <Blockquote className="" cite="- everyone">
                  <Bold>WHAT_THE_HELL_IS_THIS_DOING_HERE ??</Bold>
                </Blockquote>
                <strong></strong> problem.
              </div>
              It usually takes me a lot of time to remember what I was trying to
              achieve with this code, whether this code is even important or it
              can be ignored. Hence I make myself spend time on adding code
              comments, documentation, and notes. And if I am completely honest,
              the benefit that I get when I actually think of what I am trying
              to achive by way of writing code far outweighs the benefits of
              having banged out some code and later rewrite it 5 times and
              delete twice.{" "}
            </li>

            <li className="pb-12">
              <div className="pb--1rem">
                <Span
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "orange", to: "red", deg: 45 }}
                  weight={600}
                >
                  To compete is better that to delude yourself.{" "}
                </Span>
              </div>
              <div className="pb--1rem">
                This is the biggest one for me. I think open source allows ideas
                to compete. Even if they compete only within my own head,
                because, let's get real for a sec, no one is going to go through
                my repos with any level of attention. If they do, I'd be chaffed
                to bits to listen to their comments (after a couple of deep
                breaths that is).
              </div>
              Hoarding code in my drawer kills any opportunity for it to be
              grown into something usable by actual humans. Pushing it out there
              in the public gives it at least a chance (however small). There is
              lots of work to do after just simple <Code>git push</Code> but
              without the first step, there won't be any others.
            </li>
          </ol>
        </div>
        <H3>Conclusion</H3>
        <div className="pb-16">
          Choosing to keep my code in a public repo
          <Emoji>
            <Super>🍉</Super>
          </Emoji>
          vs hoarding all of it in a private repo gives me motivation to develop
          myself as a professional.
        </div>
        <div className="subscript">
          <Text color="grey">
            <Emoji>
              <Super>🍉</Super>
            </Emoji>
            <i>
              do not forget to remove all <Bold>PID</Bold> - <Bold>P</Bold>
              rivately <Bold>I</Bold>dentifiable <Bold>D</Bold>ata from your
              public repo before you push!
            </i>
          </Text>
        </div>
      </Text>
    ),
  },
  {
    id: 4,
    routeName: "future-posts",
    header: "Future posts",
    subheader: "What I need to write about",
    dateCreated: [2022, 3, 23],
    author: "oda",
    timeToRead: "3 min",
    timeToThink: "hours and hours",
    tags: ["googlesheets", "Mantine.dev"],
    body: (
      <Text className="leading-7">
        <ol>
          <li>
            1.{" "}
            <Span color="green">
              Done - found <a href="https://mantine.dev/">Mantine.dev</a>
            </Span>{" "}
            find library that styles html code - mine looks horrible and takes
            forever to add
          </li>
          <li>
            2. write a bunch of <i>1min solutions</i> based on the problems &
            solutions from my googlesheets
          </li>
          <li>3. add links to whatever I mention in my posts</li>
        </ol>
        <p></p>
      </Text>
    ),
  },
  {
    id: 5,
    routeName: "using-mantine-prism-to-highlight-code",
    header: "Using Mantine Prism to highlight code",
    subheader: "'Mantine pwns!' S1E1",
    dateCreated: [2022, 4, 2],
    author: "oda",
    timeToRead: "3 min",
    timeToThink: "15 min",
    tags: ["Mantine.dev", "CSS-in-JS", "Styled components", "React"],
    body: (
      <Text className="leading-7">
        <p>
          First thing that I discovered after starting this blog is that it is
          not exactly easy to present a code snippet so that it doesn't look
          ugly af. And I consider myself an <i>anti-ugly-af</i> guy most of the
          time.
        </p>
        <p>
          Youtube algo decided to take care of my problem and suggested that I
          watch{" "}
          <a href="https://www.youtube.com/watch?v=LOpFYMPXqE4">
            2022 is gonna be wild for developers...
          </a>{" "}
          which introduced me to <a href="https://mantine.dev">Mantine!</a>
        </p>
        <div className="pb--1rem">
          So now instead of writing a bunch of ugly spans and styles like this:
        </div>
        <div className="pb--2rem">
          <pre>
            <code>
              <span style={{ color: "green" }}>
                // to highlight code like this
              </span>
              <br />
              <span style={{ color: "blue" }}>const</span> a = 1;
              <br />
              <span style={{ color: "blue" }}>function</span>{" "}
              <span style={{ color: "orange" }}>fun</span>() {`{`}
              <br />
              <span style={{ color: "blue" }}> let</span> smth = 0;
              <br />
              <span style={{ color: "purple" }}> return</span> smth;
              <br />
              {`}`}
              <br />
              <span style={{ color: "green" }}>
                // I had to write it like this{" "}
              </span>
              <br />
              {`<pre>
  <code>
  <span style={{ color: "green" }}>
  // to highlight code like this
  </span>
  <br />
  <span style={{ color: "blue" }}>const</span> a = 1;
  <br />
  <span style={{ color: "blue" }}>function</span>{" "}
  <span style={{ color: "orange" }}>fun</span>() {\`{\`}
  <br />
  <span style={{ color: "blue" }}> let</span> smth = 0;
  <br />
  <span style={{ color: "purple" }}> return</span> smth;
  <br />
  {\`}\`}
  <span style={{ color: "green" }}>
  // I had to write it like this
  </span>
  <br />
  </code>
  </pre>`}
            </code>
          </pre>
        </div>

        <div className="pb--1rem">
          ... I can just use a <Code>{"<Prism />"}</Code> component from{" "}
          <a href="https://mantine.dev/others/prism/">Mantine Prism</a> to
          highlight my code snippets. Voilà:
        </div>
        <div className="pb--3rem">
          <Prism language="tsx">{codeSnippet}</Prism>
        </div>

        <PB8>
          Or use <Code>colorScheme="dark"</Code> to make it dark like{" "}
          <a href="https://www.imdb.com/name/nm3211470/">Rober Eggers's</a>{" "}
          movies:
        </PB8>

        <JS classNames="pb-8" colorScheme="dark">
          {codeSnippet}
        </JS>

        <H3>Isn't it lovely? 💥</H3>
      </Text>
    ),
  },
  {
    id: 6,
    routeName: "setting-document-event-listeners-with-React-useEffect-hook",
    header: "Setting document event listeners with React useEffect hook",
    subheader: "Dependency array is key",
    dateCreated: [2022, 4, 5],
    author: "oda",
    timeToRead: "4min",
    timeToThink: "10min",
    tags: ["react", "useEffect", "useState", "x11"],
    body: (
      <Text className="leading-7">
        <div className="pb--2rem">
          I have been helping my dear wife 👩‍💻 with her multiplication{" "}
          <Link to="https://github.com/med4kat/x11">project</Link>. She needed
          the user to give an answer to a{" "}
          <GradientSpan from="orange" to="cyan">
            x * 11
          </GradientSpan>{" "}
          problem. So my task was simple - to figure out how to do it without an{" "}
          <Code>{`<input>`}</Code> tag.
        </div>
        <div className="pb--2rem">
          <Text>
            I figured I could grab keyboard events and take it from there.
          </Text>
        </div>

        <div className="pb--1rem">
          {/* <Text> */}
          Last time I used the <Code>useEffect</Code> hook, it was to initialize
          my Component's state. It looked quite straightforward:
          {/* </Text> */}
        </div>
        <div className="pb--1rem">
          <Prism language="tsx">{`useEffect(() => {
    initState();
  }, []);
`}</Prism>
          {/* <Prism>{`useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [answerArr, task.product, isCorrectAnswer]);`}</Prism> */}
        </div>
        <div className="pb--1rem">
          Important detail is the empty array passed as the second argument.
          This sets the <Code>useEffect</Code> to fire only once per the
          Component's lifecycle. Namely - right after the Component has been
          rendered to the DOM.
        </div>
        <div className="pb--3rem">
          This signature gives us the functionality of{" "}
          <Code>componentDidMount</Code> lifecycle method of the classic style
          of <Prism language="tsx">MyComponent extends React.Component</Prism>{" "}
        </div>
        {/* <div className="pb--1rem"></div> */}

        <div className="pb--1rem">
          Today, however, I needed useEffect to help me do more than this. As I
          needed tp grab user's key strokes I had to listen to{" "}
          <Code>keydown</Code> events.
        </div>
        <div className="pb--1rem">
          <ol>
            <li>
              I'll listen to <Code>keydown</Code> events -{" "}
              <JS>document.addEventListener</JS>
            </li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </Text>
    ),
  },
  {
    id: 7,
    routeName: "git-stash-vs-git-reset",
    header: "git stash vs git reset",
    subheader: "why oh why do I not stash enough?",
    dateCreated: [2022, 4, 22],
    author: "oda",
    timeToRead: "5min",
    timeToThink: "2min",
    tags: ["git", "Netlify", "DevOps"],
    body: (
      <Text className="leading-7">
        <TLDR>
          Yesterday, after ditching a bunch of useful code because I thought it
          contained a bug which it did not, I made a rule to:
          <Bold>
            {" "}
            <Code>git stash</Code> <Span color="red">instead of </Span>{" "}
            <Code>git reset --hard</Code>
          </Bold>
        </TLDR>
        <H2>Of course it depends</H2>
        <PB8>
          on what kind of garbage code you are throwing away. If you are 100%
          sure it should perish, then <Code>git reset --hard</Code> and never
          look back. But what if you're wrong and you've just binned a code that
          might worth at least 50kcal ??
        </PB8>
        <H3>Let me share my example.</H3>
        <P pb={4}>
          Yesterday I helped my wife deploy her React project to{" "}
          <a
            className="hover:text-amber-600 underline decoration-solid"
            href="https://www.netlify.com"
          >
            Netlify
          </a>
          . The build was failing because by default Netlify's build
          configuration was set to treat React's warnings as errors. Two plans
          were obvious, I should either:
        </P>
        <PB8>
          <ol className="ml-4 list-decimal">
            <li className="mb-0">
              Correct the codebase - get rid of warnings; or
            </li>
            <li>Correct Netlify's config - make it ignore warnings.</li>
          </ol>
        </PB8>
        <H3>1. Dealing with warnings</H3>
        <PB8>
          As I wrote in my recent{" "}
          <Link to="/blog/setting-document-event-listeners-with-React-useEffect-hook">
            Setting document event listeners with React useEffect hook
          </Link>{" "}
          blogpost, I used a <Code>useEffect</Code> hooks to set up document
          listeners and React's linter warned me:
          <Center className="pt-4">
            <img
              className="rounded-lg"
              src="/img/missingDependency.png"
              alt=""
            />
          </Center>
        </PB8>
        <PB8>
          Naturally, I did not pay any attention to the warning, because:
          <Blockquote cite="Donald Knuth">
            Premature optimization is the root of all evil
          </Blockquote>
        </PB8>
        <PB8>
          That is until the moment when Netlify deployment was derailed off of
          these unhandled warnings.
        </PB8>
        <H3>Long story short</H3>
        <PB8>
          I managed to wrap everything in <Code>useCallback</Code> hooks or move
          function definitions inside useEffect hook so that its dependencies do
          not change on each render. As per the suggestion:
          <Center className="pt-4 pb-4">
            <img
              className="rounded-lg"
              src="/img/wrapInuseCallback.png"
              alt=""
            />
          </Center>
          It was a bit of struggle. But then I was all set - no warnings from
          compiler. Yas!
        </PB8>
        <PB8>
          <P pb={4}>
            The only problem was that in a previous commit I added a dependency
            to
          </P>
          <JS colorScheme="dark">{`/* init state */
  useEffect(() => {
    reset();
  }, []);`}</JS>
          <P pb={4}>Like this:</P>
          <JS colorScheme="dark">{`/* init state */
  useEffect(() => {
    reset();
  }, [reset]);`}</JS>
          Again, as per Create-react-app's suggestion:
          <Center className="pt-4 pb-4">
            <img
              className="rounded-lg"
              src="/img/addResetAsDependency.png"
              alt=""
            />
          </Center>
          Which went horribly wrong - the app just kept re-setting its state,
          because that's what <Code>reset()</Code> is for. But nevermind.
          Important thing here is that I missed the fact that I broke the app
          following compiler's advice and commited a bug. Then, after I wrangled
          all warnings and was ready to show Netlify who's the boss, I quickly
          peeked at whether the app was actually doing what it supposed to do.
          Which it wasn't.
        </PB8>
        <PB8>
          My quick panic reaction was that it must have been the current latest
          changes (a lot of wrangling with moving code/adding
          dependencies/wrapping in useCallbacks) that introduced the error. So I
          decided to discard all convoluted code wrangling and hit{" "}
          <Code>git reset --hard</Code>...
        </PB8>
        <PB8>
          ... only to discover that nope, that code was not the reason the bug
          existed. And yes, I{" "}
          <a href="https://git-scm.com/docs/git-reset#Documentation/git-reset.txt---hard">
            cannot
          </a>{" "}
          get it back.
        </PB8>
        <P pb={4}>What I should have done was to</P>
        <P pb={4}>
          <JS noCopy colorScheme="dark">{`$ git stash save wrangleDeps`}</JS>
        </P>
        <PB8>
          which would've discarded all the changes in the current working tree
          anyways, <Bold>AND</Bold> I'd have access to the work I had done.
          Which turned out to be useful and not related to the bug that I
          caught. The sad part - now I need to do the wrangling again. But this
          time I'll
        </PB8>

        <PB8>
          <Center>
            <Bold>
              {" "}
              <Code>git stash</Code> <Span color="red">instead of </Span>{" "}
              <Code>git reset</Code>
            </Bold>
          </Center>
        </PB8>
        <H3 tailwindClasses="pb-4 pt-16">to be continued ...</H3>
        <P>
          My plan now is to correct the <Code>reset</Code> as a dependency
          mistake and then follow Option 2 - make Netlify ignore my warnings.{" "}
        </P>
      </Text>
    ),
  },
  {
    id: 8,
    routeName: "git-clean",
    header: "Removing untracked files with git clean",
    subheader: "Cleaning untracked files",
    dateCreated: [2022, 4, 23],
    author: "oda",
    timeToRead: "3min",
    timeToThink: "2min",
    tags: ["git", "TypeScript"],
    body: (
      <Text className="leading-7">
        <TLDR>
          My brave attempt to turn my JavaScript Create-React-App into a
          TypeScript one by simply renaming all .jsx files into .tsx did not
          work.
        </TLDR>
        <PB8>
          To revert back all changes to my working tree I tried{" "}
          <Code>git stash</Code> and, failing that,{" "}
          <Code>git reset --hard</Code>. To my surprise neither worked - my new
          .tsx copies of .jsx files remained in the folders.{" "}
          <Code>git status</Code> called them "untracked files" and refused just
          simply forget about them.
        </PB8>
        <PB8>
          Ok, I need to remove these new untracked files somehow. I really hoped{" "}
          <Code>git reset --hard</Code> would do all this work for me, like a
          magic bullet. A bit of googling brings a new git toy in a form of{" "}
          <Code>git clean</Code> command.
        </PB8>
        <PB8>
          Actually first I do a dry-run to see which files will be removed -{" "}
          <Code>git clean -d -n</Code>. All seems fine, let's go berserk on
          these .tsx pesky unwanted untracked red-colored files.
        </PB8>
        <PB8>
          <Code>git clean -d -f</Code> bam! Yas! all good now, files are gone,
          peace restored.
        </PB8>
        <H3>Conclusion</H3>
        <PB8>
          If previously I always got away with either{" "}
          <Code>git reset --hard</Code> or, lately, <Code>git stash</Code>, then
          now I discovered that these two do not touch untracked files which
          have to be forcefully removed with <Code>git clean -d -f</Code>{" "}
        </PB8>
      </Text>
    ),
  },
];

/* add posts */
// for (let i = 100; i <= 130; i++) {
//   posts.push({
//     ...stub,
//     id: i,
//     routeName: `routeName${i}`,
//   });
// }

export default posts;
