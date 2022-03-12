import { reverseString } from "../toolbox/index.js";

const posts = [
  {
    id: 1,
    routeName: "setting-up-yahoo-prices-api-on-heroku",
    header: "Setting up Yahoo Prices API on Heroku",
    subheader: "Without the docs, it's unusable.",
    dateCreated: [2020, 12, 22],
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
        <p>Let's say she has this record:</p>
        <pre>
          <code>
            AMD ??? 19/11/2020 11:43:35 BTO LONG CALL +3 AMD NOV27'20 93 CALL
            0.57 3.59
          </code>
        </pre>
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
        <p>
          My initial logic was to:
          <p>
            <ol>
              <li>launch a Python Yahoo Prices API on Heroku,</li>
              <li>call it from the Sheets and</li>
              <li>
                automatically update K's trading logs with underlying prices.
              </li>
            </ol>
          </p>
        </p>
        <p>
          I did the first step - which is now accessible on{" "}
          <a href="https://yahooprices.herokuapp.com">Heroku</a>. To use it -
          simply POST a JSON as follows:
          <pre>
            <code>{`{ "data": Ticker[] }`}</code>
          </pre>
        </p>
        <p>
          Where each Ticker is a list of:
          <pre>
            <code>
              {`[
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
]`}
            </code>
          </pre>
        </p>
        <p>
          If it all goes right, Yahoo Prices API will add a
          <pre>
            <code>price: float</code>
          </pre>
          to each Ticker.
        </p>
        <div className="three-days-later pt--2rem">
          <img src="/img/3dayslater.jpeg" alt="Some time has passed" />
        </div>
        <p>
          As I am writing this, a month has passed since I launched the stuff
          above, and I hardly can remember how things were arranged!
        </p>
        <p>
          I am sending a POST request with Postman to{" "}
          <a href="https://yahooprices.herokuapp.com">Heroku</a> with a proper
          JSON:
          <pre>
            <code>
              {`{ 
    "data": [
        ["AMD", null, [2022, 3, 10], [15, 0, 0]]
    ]
}`}
            </code>
          </pre>
          But get a{" "}
          <a href="https://www.lifewire.com/500-internal-server-error-explained-2622938">
            500 Internal Server Error
          </a>{" "}
          response, which is 😬
        </p>
        <p className="pt--1rem">
          Let's investigate 🕵🏻‍♂️
          <pre>
            <code>heroku logs -app=yahooprices --tail</code>
          </pre>
        </p>
        <p>Lo and behold, we've got ourselves a bug!</p>
        <div className="yahoo-prices-bug">
          <img src="/img/ypb.png" alt="Screenshot of Heroku logs" />
        </div>
        <p>
          It all comes back to me now - the last feature that I added was to
          allow for all prices from the query to be returned as part of the
          response. So that users could sort themselves out should the main
          timestamp not be available. I did it by adding a new route:
          <pre>
            <code>
              <strong>POST</strong> https://yahooprices.herokuapp.com/allPrices
            </code>
          </pre>
        </p>
        <p>
          But in so doing, I forgot to set a default value to the new argument
          <pre>
            <code>attach_prices=False</code>
          </pre>
          of the underlying function that handles data requests for both routes.
          I should have done like this:
          <pre>
            <code>
              {`# yahoo.py 
def get_prices(tickers, attach_prices=False): ...`}
            </code>
          </pre>
          Now, when users call the old route:
          <pre>
            <code>
              <strong>POST</strong> https://yahooprices.herokuapp.com/
            </code>
          </pre>
          they get
          <pre>
            <code>
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
            </code>
          </pre>
        </p>

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
    header: "Post 2",
    subheader: "post 2 subheader",
    dateCreated: [2022, 2, 10],
    author: "hehe",
    body: (
      <div className=".blog-post-content-body">
        <p>
          {reverseString(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!`)}
        </p>
      </div>
    ),
  },
  {
    id: 3,
    routeName: "blogpost3",
    header: "Post 3",
    subheader: "post 3 subheader",
    dateCreated: [2022, 3, 11],
    author: "Santa",
    body: (
      <div className=".blog-post-content-body">
        <p>Posto numero 3</p>
      </div>
    ),
  },
];

export default posts;
