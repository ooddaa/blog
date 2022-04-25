import { Container, createStyles, MantineProvider, Stack } from "@mantine/core";
import BlogTOCGroup from "./BlogTOCGroup";
import { treefyPosts, emptyObject } from "../../../../toolbox";
import { CircleX } from "tabler-icons-react";

const log = (...args) => console.log(...args);

/**
 * Renders:
 *
 * Left nav bar - Year on year with total number of posts per year / per month
 * Right nav bar - Tags with total numbers of mentions in posts
 * Center - Month-on-month list of links to posts. Head == MMM DD Body = Topic
 */

export default function BlogTOC({
  posts,
  handlePostNavigation,
  setHighlightedTags,
  classNames,
} = {}) {
  if (posts === undefined || posts.length === 0) {
    return <h2>No posts yet</h2>;
  }

  const { cx } = createStyles(emptyObject)();

  /**
   * @TODO
   * Years on the left side
   * Month-on-month tiles with blog topics in the middle
   * Tags on the right side
   */

  /**
   * Arrange posts by Month, by Date as a calendar.
   * 1. Turn Post[] into a Map (year=>month:Post[])
   * 2. Iterate over Map, producing BlogTOCGroup - a nominee for the
   * worst Component name ever:)
   */
  const postTree: Map = treefyPosts(posts);
  const children = [];
  postTree.forEach((value, year) => {
    value.forEach((posts, month) => {
      children.push(
        <BlogTOCGroup
          className={cx("BlogTOCGroup pl-0 ml-0")}
          key={`${year}${month}`}
          year={year}
          month={month}
          /* I need to sort posts by day */
          posts={posts.sort(
            (
              { dateCreated: [_a, __a, dayA] },
              { dateCreated: [_b, __b, dayB] }
            ) => {
              return dayA - dayB;
            }
          )}
          onClick={handlePostNavigation}
          setHighlightedTags={setHighlightedTags}
        />
      );
    });
  });
  return (
    <MantineProvider>
      <div
        className={cx("blog-toc flex-none w-[600px] -mt-[64px]", classNames)}
      >
        {/* <div className={cx("blog-toc flex-none w-[600px]", classNames)> */}
        {/* <div className="blog-toc border bg-red-100 flex-none w-[600px] lg:w-auto lg:shrink"> */}
        {children}
      </div>
    </MantineProvider>
  );
}
