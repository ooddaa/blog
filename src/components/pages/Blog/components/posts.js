import { reverseString } from "../../../../toolbox/index.js";
import { Code, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

const posts = [
  {
    id: 1,
    routeName: "setting-up-yahoo-prices-api-on-heroku",
    header: "Setting up Yahoo Prices API on Heroku",
    subheader: "Without the docs, it's unusable.",
    dateCreated: [2022, 3, 12],
    author: "oda",
    tags: [
      "python",
      "api",
      "postman",
      "heroku",
      "documentation",
      "yahoo finance",
      "options trading",
    ],
    body: (
      <div className="blog-post-content-body">
        <p>
          Ok, so my dear wife, K, needed US stocks prices to be added to her
          option trading log, which she runs on Google Sheets.
        </p>
        <p>
          K, after a hard trading day, copy-pastes her option combos, strangles
          and whatnot data to Sheets from Interactive Brokers' TWS.
          Unfortunately, option trade data does not come with precise price of
          the underlying at the moment of option trade's execution.
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
          <img src="/img/3dayslater.jpeg" alt="Some time has passed" />
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
          <img src="/img/ypb.png" alt="Screenshot of Heroku logs" />
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

        <div className="pb--1rem">
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

        <h5 className="pt--2rem">I'll have a takeaway, please 🍟 </h5>
        <p>
          <ol>
            <li>Write more WHY-comments in your code.</li>
            <li>Set sensible defaults.</li>
            <li>Test all the time.</li>
          </ol>
        </p>
      </div>
    ),
  },
  {
    id: 2,
    routeName: "blogpost2",
    header: "Git stash",
    subheader:
      "Haven't thought it through before making changes on this branch? No biggie - git stash it!",
    dateCreated: [2022, 3, 5],
    author: "oda",
    timeToRead: "3min",
    timeToThink: "3min",
    tags: ["git"],
    body: (
      <div className=".blog-post-content-body">
        <p>
          <strong>TL/DR: </strong>If you write code first, and think later learn
          to use these babies:
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
        </p>

        <h3>Mein Workflow</h3>
        <p>
          Sorry for the title, couldn't resist. I do struggle with keeping my
          coding organised - not least because I haven't really coded as part of
          any large team with strict coding practices/guidelines. So my projects
          are fair game for me - I can touch any part of it whenever I want.
        </p>

        <p>
          Which more often than not creates a lot of unnecessary code
          re-writing. Or, even more often, after I wrote something I realise
          that it logically belongs to another branch.
        </p>

        <div className="pb--1rem">If there is no other branch, I simply</div>
        <div className="pb--2rem">
          <Code block>
            {`$ git checkout -b newBranch
$ git add .
$ git commit -m "stuff that should be on newBranch"`}
          </Code>
        </div>

        <div className="pb--1rem">
          If there IS the other branch that logically owns the changes, no
          biggie, <Code>git stash</Code> to the rescue!
        </div>
        <div className="pb--2rem">
          <Code block>
            {`$ git stash     // all changes on current branch are 
                // reverted, equals to git reset --hard
$ git checkout anotherBranch
$ git stash pop // there might be some conflicts for manual resolution, 
                // I accept all incoming (stashed) changes
$ git add .
$ git commit -m "stuff that should have been on anotherBranch"`}
          </Code>
        </div>

        <p>
          Voila! Now we have appropriately positioned and accounted for our
          code.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    routeName: "blogpost3",
    header: "How I stopped worrying and started to love open source",
    subheader: "post 3 subheader",
    dateCreated: [2022, 3, 23],
    author: "oda",
    timeToRead: "3min",
    timeToThink: "3min",
    tags: ["open source", "GitHub", "BitBucket", "git push"],
    body: (
      <div className=".blog-post-content-body">
        <p>
          <strong>TL/DR: </strong>Transition between hoarding behaviour and open
          source (in my case vs private Bitbucket and public GitHub) - takes a
          mindshift. The question boils down to: Do I want to be a better
          developer/coder/programmer/professional? If the answer is YES - go
          public. If the answer is NO - stick with a private repo.
        </p>

        <h3>Public vs Private</h3>
        <p>
          Since the beginning of my coding hobby, in 2012, I was under the
          impression that what I code matters. Not that I would be able to put
          my finger on how exactly it mattered or why. Or why I was so sure that
          anyone would ever spend any of their valuable time
          reading/stealing/using my precious code.
        </p>
        <p>
          Uploading my work to a public place changes how I think about the
          quality of my work. I have three rules:
          <ol>
            <li>
              <strong>To push is better than to hoard.</strong> Pushing to main
              branch forces me to focus on solving an issue within the
              restricted timespan (I like those green commits, I do). But at the
              same time I realise I don't want to push garbage, so a this
              becomes a battle against <strong>Unrelenting Standards</strong>{" "}
              (ie "it's better now and imperfect that perfect and never").
            </li>

            <li>
              <strong>To write documentation is better than write code.</strong>{" "}
              I want my work to be something that I am not ashamed of. The only
              sure way to get there for me is to incrementally improve my code
              (logic, organization, comments). Since "incrementally" means "step
              by step over time" - I ran into the old{" "}
              <strong>WHAT_THE_HELL_IS_THIS_DOING_HERE</strong> problem. When it
              takes me more time to remember what I was trying to achieve than
              actually incrementing the quality. Hence I make myself spend time
              on adding code comments, documentation, and notes. And if I'm
              completely honest, the benefit that I get when I actually think of
              what I am trying to achive via code far outweighs the benefits of
              having banged out some code for the sake of code lines (what?).{" "}
            </li>

            <li>
              <strong>To compete is better that to delude yourself.</strong>{" "}
              This is the big one for me. I think open source allows ideas to
              compete. Even if they compete only within my own head, because,
              let's get real for a sec, no one is going to go through my repos
              with any level of attention. If they do, I'd be chaffed to bits to
              listen to their comments (after a couple of deep breaths that is).
              Hoarding code in my drawer kills any opportunity for it to be
              grown into something usable by actual humans. Pushing it out there
              in the public gives it at least a chance (however small). There is
              lots of work to do after just simple <Code>git push</Code> but
              without the first step, there won't be any others.
            </li>
          </ol>
        </p>

        <h3>Conclusion</h3>
        <p>
          Pushing code to a public repo (and do remove all PID - privately
          identifiable data from your repo) vs hoarding all in a private repo
          gives you a chance and a stimulus to improve your work.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    routeName: "blogpost4",
    header: "Future posts",
    subheader: "What I need to write about",
    dateCreated: [2022, 3, 23],
    author: "oda",
    timeToRead: "3min",
    timeToThink: "3min",
    tags: [],
    body: (
      <div className=".blog-post-content-body">
        <ol>
          <li>
            find library that styles html code - mine looks horrible and takes
            forever to add
          </li>
          <li>
            write a bunch of <i>1min solutions</i> based on the problems &
            solutions from my google sheets
          </li>
          <li>add links</li>
        </ol>
        <p></p>
      </div>
    ),
  },
  {
    id: 5,
    routeName: "blogpost5",
    header: "Using Mantine Prism to highlight code",
    subheader: "Mantine pwns #1",
    dateCreated: [2022, 4, 2],
    author: "oda",
    timeToRead: "3min",
    timeToThink: "3min",
    tags: ["Mantine.dev", "CSS-in-JS", "Styled components", "React"],
    body: (
      <div className=".blog-post-content-body">
        <p>
          First thing that I discovered after starting this blog is that it is
          not exactly easy to present a code snippet so that it doesn't look
          ugly af. And I consider myself an <i>anti-ugly-af</i> guy most of the
          time.
        </p>
        <p>
          So Youtube algo decided to take care of my problem and suggested that
          I watch{" "}
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
              <span style={{ color: "orange" }}>fun</span>() {`{`};
              <br />
              <span style={{ color: "blue" }}> let</span> smth = 0;
              <br />
              <span style={{ color: "purple" }}> return</span> 0;
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
  <span style={{ color: "orange" }}>fun</span>() {\`{\`};
  <br />
  <span style={{ color: "blue" }}> let</span> smth = 0;
  <br />
  <span style={{ color: "purple" }}> return</span> 0;
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
          <Prism language="tsx">{`const a = 1;
function fun() {;
 let smth = 0;
 return 0;
}`}</Prism>
        </div>
        <Text>Isn't it lovely? 💥</Text>
      </div>
    ),
  },
];

export default posts;

const stub = {
  id: 2,
  routeName: "blogpost2",
  header: "Post 2",
  subheader: "post 2 subheader",
  dateCreated: [2022, 2, 10],
  author: "oda",
  timeToRead: "3min",
  timeToThink: "3min",
  tags: [],
  body: (
    <div className=".blog-post-content-body">
      <p></p>
    </div>
  ),
};
