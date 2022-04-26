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
   * Arrange posts by Month / Date as a calendar.
   * 1. Turn Post[] into a Map (year=>month:Post[])
   * 2. Iterate over Map, producing BlogTOCGroup - a nominee for the
   * worst Component name ever:)
   * 3. Sort
   */
  const postTree: Map = treefyPosts(posts);
  // log(postTree);
  const children = [];
  /**
   * hehe don't forget the map.forEach signature: (value, key, map, thisArg)
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
   *
   * postTree = {2022 => {month => Post[]...}
   */
  postTree.forEach((months, year) => {
    /* sort by month first */
    // log(months.entries());
    months.forEach((posts, month) => {
      children.push(
        <BlogTOCGroup
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
  /* I need to sort posts by month */
  children.sort();
  return (
    <MantineProvider>
      <div className={cx("blog-toc flex-none -mt-[64px]", classNames)}>
        {children}
      </div>
    </MantineProvider>
  );
}
