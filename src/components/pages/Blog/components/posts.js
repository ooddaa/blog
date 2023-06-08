import {
  Span,
  Bold,
  Super,
  GradientSpan,
  JS,
  JSDark,
  Emoji,
  H3,
  H2,
  P,
  PB8,
  M,
  MB8,
  MB4,
  TLDR,
} from "../../../../toolbox/index.js";
import { Code, Text, Blockquote, Center, List } from "@mantine/core";
import { Link } from "react-router-dom";
import { Prism } from "@mantine/prism";
import { Prism as PrismRenderer } from 'prism-react-renderer';

(typeof global !== 'undefined' ? global : window).Prism = PrismRenderer;
import('prismjs/components/prism-elixir');

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
const SpongeBob = (
  <GradientSpan from="yellow" to="orange">
    SpongeBob
  </GradientSpan>
);
const posts = [
  {
    id: 9,
    routeName: "object-to-graph-mapping-tool",
    header: "Object-To-Graph mapping tool",
    subheader: "What made me want to create knowledge graphs",
    dateCreated: [2022, 2, 10],
    author: "oda",
    timeToRead: "5min",
    timeToThink: "10min",
    tags: ["knowledge graphs", "Mango", "Neo4j"],
    body: (
      <Text className="leading-7">
        <TLDR>
          <Bold>
            Property-rich Knowledge Graphs can provide criticall
            machine-readable context for humans to build useful real-world
            services.
          </Bold>
        </TLDR>

        <H3>Single Source of Truth</H3>

        <MB8>
          In engineering an Enterprise Knowledge Graph (<Bold>EKG</Bold>) that
          holds identity data the key challenge from the start was how to
          ascertain the uniquness of data. How to make sure that the data
          supplied to the EKG could be accessed as a Single Source of Truth (
          <Bold>SST</Bold>) for its users?
        </MB8>

        <MB8>
          The key architectual decision was made to design a platform which
          would help ensure that there are no copies of the same Node. A Node
          would constitue whatever user deemed a <Bold>mental entity </Bold> to
          which they already attached a "uniquness" attribute in their minds.
        </MB8>

        <H3>For example</H3>

        <MB8>
          Suppose there is a CEO, {SpongeBob}, in our organization. All
          employees have the same "unique" {SpongeBob} in mind when they talk
          about him in the pub after work. But when it comes to representing{" "}
          {SpongeBob} outside of employee's collective mind, say, writing an
          email with some details/attributes of {SpongeBob}, then each employee
          might refer to their "copy" of these attributes, located wherever (on
          their desktops/in their emails/in folders on Sharepoint/on pages of
          Confluence etc).
        </MB8>
        <MB8>
          What's important here is that regardless of the quality and
          consistency of this attribute data, there is not an equivalent digital
          representation of {SpongeBob} that can easily be referred to by all
          employees should they need to "speak" of him digitally. There is
          seldom an SST representation of {SpongeBob} and as the result, a lot
          of time is spent searching for the latest updated version of{" "}
          {SpongeBob}'s attributes (long phone calls / emails to chase /
          searching by text string and not by the meaning - {SpongeBob}-ness).
        </MB8>

        <MB8>
          The essence, the "CEO"-ness is in fact transient -current CEO might
          step down and another person can become a new CEO. In this case
          everyone would make essential modifications to the notion of the
          "current CEO". But {SpongeBob} won't go anywhere - it will persist in
          the EKG as a new Chairsponge.
        </MB8>

        <H3>The Idea</H3>
        <MB4>
          The idea came up when I worked for a family office and was dealing
          with bits and pieces of data coming across my desk. I noticed that I
          would spend most of my time and effort not on the value-generating
          activities relating to the data, but on solving questions like:
        </MB4>
        <MB8>
          <List>
            <List.Item>
              1. What is the correct full address of Person X? And at the point
              of time T?
            </List.Item>
            <List.Item>
              2. Did we send that document to Y? When? What was in it?
            </List.Item>
            <List.Item>3. Where can I find XYZ?</List.Item>
          </List>
        </MB8>

        <MB8>
          It was obvious that the solutions to these questions (99% of time that
          would be a source document, or colleague's advice) resided within my
          colleague's minds or on their desktops/emails. We did have an old and
          limited database that had some records of some legal entities and
          natural persons - but to use that knowledge it had to be checked and
          double-checked with colleagues first.
        </MB8>

        <MB8>
          Which in 50% of situations required them requesting the info from
          their counterparties. The problem was that once all the effort was
          made and the relevant info was received, verified and utilized, it was
          simply forgotten until the next time when same problem arrived. And
          when it did, usually after a prolonged period of time, no one could
          easily locate the previous result to reduce the amount of cognitive
          work.
        </MB8>

        <H3>Touch it if it's broken</H3>
        <MB4>
          A simple solution was to agree to share all such hard-earned
          knowledge, but:
        </MB4>
        <MB8>
          <List>
            <List.Item>
              1. Everyone wants to go on writing emails and making phone calls
              (status quo bias).
            </List.Item>
            <List.Item>
              2. There was no simple way to do it. We tried Confluence - but it
              required a learning curve that no one wanted (it at least did not
              seem too exiting to do extra mental work for free).
            </List.Item>
          </List>
        </MB8>
        <MB8>
          No one wants to archive. Archiving is a difficult mental work which is
          not rewarded in an obvious, immediate way. Therefore no one does it at
          will. This creates a huge (but familiar) tech debt in a form of
          knowledge search, repeating same work that already has been done by
          others.{" "}
        </MB8>
        <MB8>
          On the upside this is how office workers v1.0 justify the time they
          spend in the office getting paid.
        </MB8>

        <H3>Future solution</H3>
        <MB8>
          Office workers v2.0 need to recognize, embrace and be rewarded for
          Knowledge Sharing activities. They need to be confident in knowing
          that there is a Single Source of Truth, accessible without{" "}
          <a href="https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch">
            extra mental effort
          </a>
          . And if there is extra mental effort required (to upload knowledge),
          then it is rewarded immediately (reputation/points/perks etc) to
          recognize Knowledge Sharing as a critical value-generating activity of
          the 21 century.
        </MB8>
        <MB8>
          <GradientSpan from="blue" to="purple">
            That is why I decided to solve Knowledge Management for Enterprises
          </GradientSpan>
        </MB8>
      </Text>
    ),
  },
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
      "REST",
      "postman",
      "heroku",
      "documentation",
      "yahoo finance",
      "options trading",
      "Interactive Brokers",
    ],
    body: (
      <Text className="leading-7">
        <TLDR>
          Setting up a REST API on Heroku to retreive Yahoo! Finance stock prices as close as possible to daily option trades is easier if you write some documentation.
          Well, any software maintenance is easier with documentation. DOCUMENTATION!
        </TLDR>

        <H2>
          What do you do when your wife trades US stock options?
        </H2>
        <MB8>
          You try to stay out of it as much as possble <Emoji whitespace={false} >😂</Emoji> . But how can I say no when my dear wife, K, asks me to help her add US stocks prices to her
          option trading log, which she runs on Google Sheets?
        </MB8>

        <H3>So</H3>
        <MB8>
          K, after a hard trading day, copy-pastes her option combos, strangles
          and whatnot data to Sheets from Interactive Brokers' TWS.
          Unfortunately, IB's option trade reports do not come with a precise
          price of the underlying at the moment of option trade's execution.
        </MB8>
        <MB4>Let's say she has this record:</MB4>
        <MB4>
            <JS noCopy colorScheme="dark">{`AMD [STOCK PRICE ???] 19/11/2020 11:43:35 BTO LONG CALL +3 AMD NOV27'20 93 CALL 0.57 3.59`}</JS>
        </MB4>
        <MB8>
          It would be handy to know how much AMD traded for at 11:43:35 on
          November 19, 2020, right? Ok, maybe we aren't that fastidious and can
          round time down to 11:43.
        </MB8>
        <MB8>
          If so, then the easiest way to get stock prices is to use YahooPrices
          API. ...of which no documentation in human-readable format exists...
        </MB8>
        <MB8>
          Ran Aroussi published a nice Python package - <a href="https://pypi.org/project/yfinance/" alt="link to yfinance package">yfinance</a>. Many thanks,
          Ran! We are going to use this package to set up our simple Yahoo! Prices
          REST API on Heroku.
        </MB8>
        <MB4>
          <strong>My initial logic was to:</strong>
        </MB4>
        <div className="pb--3rem">
          <ol>
            <li>launch a Python Yahoo Prices API on Heroku,</li>
            <li>call it from the Sheets and</li>
            <li>
              automatically update K's trading logs with underlying prices.
            </li>
          </ol>
        </div>

        <MB4>
          The API is now accessible on{" "}
          <a href="https://yahooprices.herokuapp.com">Heroku</a>. To use it -
          simply POST with an application/json body set as follows:
        </MB4>
        <div className="pb--2rem">
          <Code block>{`{ "data": Ticker[] }`}</Code>
        </div>
        <MB4>Where each Ticker is:</MB4>
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
        <MB4>
          If it all goes right, Yahoo Prices API will add a
        </MB4>
        <MB4>
          <Code block>price: float</Code>
        </MB4>
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
        <MB4>
          I am sending a POST request with Postman to{" "}
          <a href="https://yahooprices.herokuapp.com">Heroku</a> with a proper
          JSON:
        </MB4>
        <MB4>
          <Code block>
            {`{ 
    "data": [
        ["AMD", null, [2022, 3, 10], [15, 0, 0]]
    ]
}`}
          </Code>
        </MB4>
        <div className="pb--2rem">
          But get a{" "}
          <a href="https://www.lifewire.com/500-internal-server-error-explained-2622938">
            500 Internal Server Error
          </a>{" "}
          response, which is 😬
        </div>

        <MB4>Let's investigate, shall we 🕵🏻‍♂️</MB4>
        <div className="pb--2rem">
          <Code block>$ heroku logs -app=yahooprices --tail</Code>
        </div>

        <MB4>
          Lo and behold, we've got ourselves a bug!
        </MB4>
        <div className="yahoo-prices-bug pb--2rem">
          <img
            className="rounded-lg"
            src="/img/ypb.png"
            alt="Screenshot of Heroku logs"
          />
        </div>
        <MB4>🤔 ???</MB4>
        <MB4>
          Ah yes, it all comes back to me now - the last feature that I added
          was to allow for all prices from the query to be returned as part of
          the response. Then users could sort themselves out should the main
          timestamp not be available. I did it by adding a new route:
        </MB4>
        <div className="pb--2rem">
          <Code block>
            <strong>POST</strong> https://yahooprices.herokuapp.com/allPrices
          </Code>
        </div>

        <MB4>
          But in so doing, I forgot to set a default value to the new argument
        </MB4>
        <MB4>
          <Code block>attach_prices=False</Code>
        </MB4>
        <MB4>
          of the underlying function that handles data requests for both routes.
          I should have done like this:
        </MB4>
        <MB4>
          <Code block>
            {`# yahoo.py 
def get_prices(tickers, attach_prices=False): ...`}
          </Code>
        </MB4>

        <MB4>Now, when users call the old route:</MB4>
        <MB4>
          <Code block>
            <strong>POST</strong> https://yahooprices.herokuapp.com/
          </Code>
        </MB4>

        <MB4>they get</MB4>

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

        <MB4>
          If there is <span className="text-lg font-bold">NO</span> other
          branch, I simply
        </MB4>

        <JS colorScheme="dark" noCopy classNames="pb-8">
          {`$ git checkout -b newBranch
$ git commit -am "stuff that should be on newBranch"`}
        </JS>

        <MB4>
          If there <span className="text-lg font-bold">IS</span> the other
          branch that logically owns the changes, no biggie,{" "}
          <Code>git stash</Code> to the rescue!
        </MB4>

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
          <MB4>
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
          </MB4>
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
              <MB4>
                <Span
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                  weight={600}
                >
                  To push is better than to hoard.{" "}
                </Span>
              </MB4>
              Pushing to main branch forces me to focus on solving an issue
              within the restricted timespan (I like those green commits, I do).
              But at the same time I realise I don't want to push garbage, so a
              this becomes a battle against{" "}
              <strong>Unrelenting Standards</strong> (ie "it's better now and
              imperfect than perfect and never").
            </li>

            <li className="pb-12">
              <MB4>
                <Span
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "green", to: "yellow", deg: 45 }}
                  weight={600}
                >
                  To write documentation is better than to write code.{" "}
                </Span>
              </MB4>
              <MB4>
                I want my work to be something that I am proud of. The only sure
                way to get there for me is to incrementally improve on my work.
                Since "incrementally" means "step by step over time" - I ran
                into the old{" "}
                <Blockquote className="" cite="- everyone">
                  <Bold>WHAT_THE_HELL_IS_THIS_DOING_HERE ??</Bold>
                </Blockquote>
                <strong></strong> problem.
              </MB4>
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
              <MB4>
                <Span
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "orange", to: "red", deg: 45 }}
                  weight={600}
                >
                  To compete is better that to delude yourself.{" "}
                </Span>
              </MB4>
              <MB4>
                This is the biggest one for me. I think open source allows ideas
                to compete. Even if they compete only within my own head,
                because, let's get real for a sec, no one is going to go through
                my repos with any level of attention. If they do, I'd be chaffed
                to bits to listen to their comments (after a couple of deep
                breaths that is).
              </MB4>
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
        <MB4>
          So now instead of writing a bunch of ugly spans and styles like this:
        </MB4>
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

        <MB4>
          ... I can just use a <Code>{"<Prism />"}</Code> component from{" "}
          <a href="https://mantine.dev/others/prism/">Mantine Prism</a> to
          highlight my code snippets. Voilà:
        </MB4>
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
    tags: ["react", "useEffect", "useState"],
    body: (
      <Text className="leading-7">
        <TLDR>
        The most important thing to remember here is that <Code>useEffect</Code> hook runs its logic (produces effects) <Bold>ON EVERY RENDER</Bold>. But there are simple techniques to fine-tune this behaviour: 
        <div className="pt-4">
            <ul>
              <li>
                <Code>[]</Code>
              </li>
              <li>
                <Code>[dependencies]</Code>
              </li>
              <li>
                <Code>return a clean up function</Code>
              </li>
            </ul>
          </div>
        </TLDR>

        <H2>
          Active listening
        </H2>
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

        <MB4>
          {/* <Text> */}
          Last time I used the <Code>useEffect</Code> hook, it was to initialize
          my Component's state. It looked quite straightforward:
          {/* </Text> */}
        </MB4>
        <MB4>
          <JSDark>{`// note the empty [] passed as the second argument
// that is what makes this set up run once after component renders
useEffect(() => {
  initState();
}, []);

// or as a one liner
useEffect(initState, []); 
`}</JSDark>
          {/* <Prism>{`useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [answerArr, task.product, isCorrectAnswer]);`}</Prism> */}
        </MB4>
        <MB4>
          Important detail here is the empty array passed as the second argument.
          This sets the <Code>useEffect</Code> to fire only once per the
          Component's lifecycle. Namely - right after the Component has been
          rendered to the DOM.
        </MB4>
        <MB4>
          This signature gives us the functionality of{" "}
          <Code>componentDidMount</Code> lifecycle method of the classic style
          of
        </MB4>
        <MB4>
        <JSDark>MyComponent extends React.Component</JSDark>
        </MB4>

        <MB4>
          My first approach to user input was to set up an <Code>{`<input></input>`}</Code> element and then user would have to click on it and enter their answer. Then we could grab whatever user entered and deal with it accordingly.
        </MB4>

        <MB4>
          But in this instance, K wanted user to simply use keyboards to enter numerical answers, without clicking on anything with the mouse. So <Code>{`<input></input>`}</Code> was out of the question.
        </MB4>

        <MB4>
          Apparently, I needed to grab user's key strokes so I had to listen to <Code>keydown</Code> events.
        </MB4>

        <MB4>
          Which brings us to the following code:
        </MB4>

        <JSDark>
{`/* add listeners */
useEffect(() => {
  document.addEventListener("keydown", handleKeyDown);
  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [answerArr, task.product, isCorrectAnswer]);`}
        </JSDark>

        <MB4>
          Let me explain what's going on here:
        </MB4>
        <MB4>
        <ol>
            <li>Line 3. We ask the browser to fire a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event" alt='link to document keydown event for reference'>Keydown event and provide a function that will be called with that event as the only argument - in our case we call it <Code>handleKeyDown</Code></a></li>
            <li>Lines 4 and 5. Clean up. If the component within which we are setting this functionality is ever removed from the DOM (unmounted), this is how we tell useEffect what to do to clean things up. This is the equivalent of using <Code>componentWillUnmount</Code> lifecycle method from React class component, which is called immediately <a href="https://reactjs.org/docs/react-component.html#componentwillunmount" alt="reference link to componentWillUnmount">before the component is destroyed</a>. Here we simply don't want our event listeners to clutter and will clean them up, tidy tidy tidy up.</li>
            <li>Line 7. Performance optimization. To make useEffect efficient, we may provide a dependecy array - if nothing in this array changes, useEffect will skip and not perform its actions, adding and removing listeners in this case. <a href="https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects">Check this tip</a></li>
          </ol>
        </MB4>

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
          <JSDark>{`/* init state */
  useEffect(() => {
    reset();
  }, [reset]);`}</JSDark>
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
  {
    id: 9,
    routeName: "routeName",
    header: "Philosophy of coding #1",
    subheader: "dealing with tech debt vs piling up more tech debt",
    dateCreated: [2022, 5, 13],
    author: "oda",
    timeToRead: "5min",
    timeToThink: "whole life",
    tags: [
      "philosophy",
      "tech debt",
      "efficiency"
    ],
    body: <Text className="leading-7">
      <TLDR>
        I have been asking myself - how do I balance finishing old projects/tasks (aka dealing with tech debt) vs starting new projects/tasks?
        What's the rule of thumb? If I have 30min - should I go and increment onto my old projects vs should I vantage into something from "Need to try before I die" list?

        I do not have a clear answer to it. I guess it depends on what goal I want to achieve.

        Incrementing on old "less dopamine-promising" projects actually might provide MORE positive results than I expect. Namely, I value competence very highly, therefore a simple iteration over something that I had tried/touched/done in the past seems to offer me a larger multiplication factor in terms of assessing the value that I get out of this activity. Example: I never liked doing my homework in two stages, as we where taught at school: 1. first draft, 2. then - the "clean" version for the teached. If I remember correctly (which I might not!) I tried to skip the "draft" version and go for the clean one to save myself time. What I was missing out on, though, was the repetition part of the learning. "Repetition is the mother of learning" - as the Russian saying goes. To me the demand to make any homework in two stages was about making sure that the "clean" version was readable for the teacher. Our "drafts" were never checked so no emphasis on the fact that a 'draft' is a highly valuable part of the learning process, a 'sandbox' was ever made. 
        Also, as the result of my wanting to get things done quickly, I had missed the opportunity to get comfortable and respectful to the incrementing method of producing work. I would have a go at something, if it didn't turn out the way I was expecting (nothing does in the first go, cmon), then I'd not hesitate to destroy the product and start again from scratch. I don't think this is the best approach because: 1) It taught me to devalue the results of my work - if I'm comfortable starting all over again, it must be that my work is not worth saving. 2) Complex systems are not created in one go, first simple blocks are obtained then they are iteratively combined into increasingly complex systems. What can be mistaken for a complex system that works is a complicated system that does not work. The latter is what most probably results from a "lets write this post in one go" approach (which I won't by the way - I have a 3step process - 3 iterations). 
      </TLDR>
    </Text>,
  },
  {
    id: 10,
    routeName: "improve-code-organization-in-phoenix-liveview",
    header: "Improve code organisation with embed_templates/2 in Phoenix LiveView",
    subheader: "Extract .heex markup into separate files",
    dateCreated: [2023, 6, 8],
    timeToRead: "5 min",
    timeToThink: "30 min",
    author: "oda",
    tags: [
      "code organisation",
      ".heex",
      "Elixir",
      "Phoenix",
      "Phoenix LiveView"
    ],
    body: (
      <Text className="leading-7">
        <TLDR>
        One of the challenges we often face when working with Phoenix LiveView is the growing size of module files due to the inclusion of .heex markup. With logic and views combined in a single file, it becomes difficult to read and work with the code.
        </TLDR>

        <H2>
          Put .heex into templates
        </H2>
        <MB8>
        To address this issue, we can employ the <a href="https://hexdocs.pm/phoenix_live_view/Phoenix.Component.html#embed_templates/2" alt="link to embed_templates docs" className="text-sky-700 hover:underline">embed_templates/2</a> function provided by Phoenix LiveView. By placing our .heex files into separate template files and importing (or embedding) them into our module, we can achieve better code organization and improve readability.
        </MB8>

        {/* <H3>So</H3> */}
        <MB4>
        To get started, we need to create a directory structure that separates our module file from the .heex templates. For example:
        </MB4>
        <MB4>
            <JS noCopy colorScheme="dark">{`/..
|-- my_module.ex
|-- my_module_template.html.heex
`}</JS>
<MB4>
Inside our my_module.ex file, we can use the embed_templates/2 function to import all .heex files from the current folder. Here's an example:
</MB4>
<Prism block language="elixir">{`defmodule MyModule do
  embed_templates "*"    # This will grab all .heex files in the current folder

  def my_module_template(assigns)
end
`}</Prism>

        </MB4>
        <MB8>
        With this setup, the .heex templates are compiled at compile time and become available as function components within our module. 
        </MB8>

        <H2>
          Provide attributes and improve code quality
        </H2>

        <MB4>
        We can now provide attributes that the component expects to get, improving the organization and readability of our code.
        </MB4>
        <Prism block language="elixir">{`defmodule MyModule do
  embed_templates "*"     # This will grab all .heex files in the current folder

  attr :name, :string, required: true     # we need a name
  attr :nickname, :string                # and might have a nickname as well
  def my_module_template(assigns)

end
`}</Prism>
<MB4></MB4>

        <a href="https://hexdocs.pm/phoenix_live_view/Phoenix.Component.html#module-attributes" alt="link to embed_templates docs" className="text-sky-700 hover:underline">Attributes</a> are a great tool to use when you want to document the expected usage of the component. Which is always a good practice. 
<MB4></MB4>

        By separating our markup into individual template files and utilizing the embed_templates/2 function, we can achieve a cleaner and more maintainable codebase in Phoenix LiveView.

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
//     tags: [`tag${i}`],
//   });
// }

export default posts;
