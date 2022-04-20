import { Link } from "react-router-dom";
import { Center, Container, MantineProvider, Stack } from "@mantine/core";
import BlogTOCGroup from "./BlogTOCGroup";
import { treefyPosts } from "../../../../toolbox";

const log = (...args) => console.log(...args);

// const border = "1px red solid";
const border = "none";

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
        />
      );
    });
  });
  return (
    <MantineProvider>
      <Container className="mb-10 w-full" style={{ border }}>
        <Stack align="center" justify="flex-start">
          {children}
        </Stack>
      </Container>
    </MantineProvider>
  );
}

// return (
//   <div className="blog-post-table-of-contents">
//     <ul>
//       {posts.map((post, idx) => {
//         return (
//           <li key={post.id}>
//             {
//               <Link
//                 to={post.routeName}
//                 onClick={(e) => handlePostNavigation(idx)}
//               >
//                 {post.header}
//               </Link>
//             }
//           </li>
//         );
//       })}
//     </ul>
//   </div>
// );

// {/* <Center className="w-auto h-48 bg-blue-100" style={{ border }}>
//             <div>w-auto h-48 bg-blue-100</div>
//           </Center>
//           <Center className="w-min h-48 bg-blue-200" style={{ border }}>
//             <div>w-min h-48 bg-blue-200</div>
//           </Center>
//           <Center className="w-max h-48 bg-blue-300" style={{ border }}>
//             <div>w-max h-48 bg-blue-300</div>
//           </Center>
//           <Center className="w-96 h-48 bg-blue-400" style={{ border }}>
//             {/* <Center style={{ width: 400, height: 200, border: "1px red solid" }}> */}
//             <div>All elements inside Center are centered with width 96 rem</div>
//           </Center>
//           <Center className="w-96 h-48 bg-blue-400" style={{ border }}>
//             {/* <Center style={{ width: 400, height: 200, border: "1px red solid" }}> */}
//             <div>All elements inside Center are centered with width 96 rem</div>
//           </Center>
//           <Center className="w-96 h-48 bg-blue-400" style={{ border }}>
//             {/* <Center style={{ width: 400, height: 200, border: "1px red solid" }}> */}
//             <div>All elements inside Center are centered with width 96 rem</div>
//           </Center>
//           <Center className="w-96 h-48 bg-blue-400" style={{ border }}>
//             {/* <Center style={{ width: 400, height: 200, border: "1px red solid" }}> */}
//             <div>All elements inside Center are centered with width 96 rem</div>
//           </Center> */}
