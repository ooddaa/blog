import { Link } from "react-router-dom";

export default function BlogTableOfContents({
  posts,
  handlePostNavigation,
} = {}) {
  if (posts === undefined || posts.length === 0) {
    return <h2>No posts yet</h2>;
  }
  return (
    <div className="blog-post-table-of-contents">
      <ul>
        {posts.map((post, idx) => {
          return (
            <li key={post.id}>
              {
                <Link
                  to={post.routeName}
                  onClick={(e) => handlePostNavigation(idx)}
                >
                  {post.header}
                </Link>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}
