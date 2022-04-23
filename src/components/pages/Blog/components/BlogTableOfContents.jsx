import { Container, MantineProvider, Stack } from "@mantine/core";
import BlogTOCGroup from "./BlogTOCGroup";
import { treefyPosts } from "../../../../toolbox";

const log = (...args) => console.log(...args);

/**
 * Renders:
 *
 * Left nav bar - Year on year with total number of posts per year / per month
 * Right nav bar - Tags with total numbers of mentions in posts
 * Center - Month-on-month list of links to posts. Head == MMM DD Body = Topic
 */

export default function BlogTableOfContents({
  posts,
  handlePostNavigation,
  setHighlightedTags,
} = {}) {
  if (posts === undefined || posts.length === 0) {
    return <h2>No posts yet</h2>;
  }

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
      <div className="blog-toc">{children}</div>
    </MantineProvider>
  );
}
