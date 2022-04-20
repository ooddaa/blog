// // import posts from "./components/pages/Blog/components/posts";
// // const posts = require("./components/pages/Blog/components/posts");
// import posts from "../components/pages/Blog/components/posts.js";
// const log = (...args) => console.log(...args);

// const tree = new Map();

// const stub = {
//   id: 0,
//   routeName: "routeName",
//   header: "header",
//   subheader: "subheader",
//   dateCreated: [2022, 2, 10],
//   author: "author",
//   timeToRead: "timeToRead",
//   timeToThink: "timeToThink",
//   tags: [],
//   // body: <></>,
// };

// const posts1 = [
//   {
//     id: 0,
//     routeName: "routeName0",
//     header: "header0",
//     subheader: "subheader",
//     dateCreated: [2022, 1, 10],
//     author: "author",
//     timeToRead: "timeToRead",
//     timeToThink: "timeToThink",
//     tags: [],
//     // body: <></>,
//   },
//   {
//     id: 1,
//     routeName: "routeName1",
//     header: "header1",
//     subheader: "subheader",
//     dateCreated: [2022, 1, 10],
//     author: "author",
//     timeToRead: "timeToRead",
//     timeToThink: "timeToThink",
//     tags: [],
//     // body: <></>,
//   },
//   {
//     id: 2,
//     routeName: "routeName2",
//     header: "header2",
//     subheader: "subheader",
//     dateCreated: [2022, 2, 10],
//     author: "author",
//     timeToRead: "timeToRead",
//     timeToThink: "timeToThink",
//     tags: [],
//     // body: <></>,
//   },
//   {
//     id: 3,
//     routeName: "routeName3",
//     header: "header3",
//     subheader: "subheader",
//     dateCreated: [2021, 12, 10],
//     author: "author",
//     timeToRead: "timeToRead",
//     timeToThink: "timeToThink",
//     tags: [],
//     // body: <></>,
//   },
//   {
//     id: 4,
//     routeName: "routeName4",
//     header: "header4",
//     subheader: "subheader",
//     dateCreated: [2021, 12, 12],
//     author: "author",
//     timeToRead: "timeToRead",
//     timeToThink: "timeToThink",
//     tags: [],
//     // body: <></>,
//   },
// ];

// // interface Post {
// //   id: number;
// //   routeName: string;
// //   header: string;
// //   subheader: string;
// //   dateCreated: [number, number, number];
// //   author: string;
// //   timeToRead: string;
// //   timeToThink: string;
// //   tags: string[];
// //   body: JSX;
// // }
// /**
//  * Turns Post[] into a tree, sorting by year and month.
//  *
//  * @param {Post} posts
//  * @param {Map} tree
//  * @returns {Map}
//  */
// function treefyPosts(posts /* : Post[] */, tree = new Map()) /* : Map */ {
//   posts.forEach((post) => {
//     const [year, month] = post.dateCreated;
//     tree.has(year)
//       ? tree.get(year).has(month)
//         ? tree.get(year).get(month).push(post)
//         : tree.get(year).set(month, [post])
//       : tree.set(year, new Map().set(month, [post]));
//   });
//   return tree;
// }
// // tree.set(2022, new Map());
// // log(tree.has(2022));
// // log(tree.get(2022));
// // tree[2022].set()
// // const newtree = treefyPosts(posts);
// // log(newtree);
// // log(newtree.get(2022));
// // tree.set

// // newtree.forEach(log);

// // for (let [k, v] of newtree) {
// //   log(k, v);
// // }

// const postTree /* : Map */ = treefyPosts(posts);
// log(postTree);
