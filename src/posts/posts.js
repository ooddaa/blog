import { reverseString } from "../toolbox/index.js";

const posts = [
  {
    id: 1,
    routeName: "setting-up-yahoo-prices-api-on-heroku",
    header: "Setting up Yahoo Prices API on Heroku",
    subheader: "Without the docs, it's unusable.",
    dateCreated: [2020, 12, 22],
    author: "oda",
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
              <li>
                call it from the Sheets and automatically update K's trading
                logs with
              </li>
              <li>underlying prices.</li>
            </ol>
          </p>
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
