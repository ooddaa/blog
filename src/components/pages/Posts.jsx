import posts from "../../posts/posts";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.header} by {post.author}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
