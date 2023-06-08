import PropTypes from "prop-types";
import { Fragment } from "react";
import { resolveMonth } from "../../../../toolbox/index.js";
import { Text, Image } from "@mantine/core";
import { Span, Emoji } from "../../../../toolbox";
import MantineHeader from "../../../layout/MantineHeader";

const links = [
  {
    link: "/",
    label: "Main",
  },
  {
    link: "/blog",
    label: "Blog",
  },
  {
    link: "https://github.com/ooddaa",
    label: "Github",
  },
  {
    link: "/portfolio",
    label: "Portfolio",
  },
  {
    link: "/playground",
    label: "Playground",
  },
];

const propTypes = {
  defaultHeader: PropTypes.string,
  post: PropTypes.object,
};
const defaultProps = {
  defaultHeader: "Default Header",
};

function BlogPost({ post, defaultHeader }) {
  const {
    header,
    // subheader,
    dateCreated,
    body,
    author,
    timeToRead,
    // timeToThink,
  } = post;
  const [year, month, day] = dateCreated;
  return (
    <>
      <MantineHeader links={links}></MantineHeader>
    
    <div className="blog-post">
      <div className="blog-post__header">
        <div className="log-post__header__title pb-8 font-bold text-6xl">
          <h1>{header || defaultHeader}</h1>

        </div>

        <div className="blog-post__header__author">
          <div className="flex flex-row gap-8 justify-center items-center border-t">
            <div><Span> by </Span><Span className="oda">{author}</Span> </div>
            <div> 
              <Span>{day}</Span><Span className="superscript">th</Span>  <Span>{resolveMonth(month)},{" "}{year}</Span>
            </div>
              <div>
                <Span>{timeToRead} read</Span>
              </div>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-post__body">{body}</div>
    </div>
    </>
  );
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

export default BlogPost;
