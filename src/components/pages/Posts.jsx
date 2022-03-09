import posts from "../../posts/posts";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="posts">
      <ul>
        {posts.slice(1).map((post) => (
          <li key={post.id}>
            {
              <Link to={post.routeName}>
                {post.header} by {post.author}
              </Link>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
