import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogPost from "./components/BlogPost";

function BlogTableOfContents({ posts, handlePostNavigation } = {}) {
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
                  {post.header} by {post.author}
                </Link>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function BlogPostNavigation({ previousPost, nextPost }) {
  return (
    <div className="blog-post-navigation">
      <div className="previous-blog-post">
        {(previousPost && (
          <a href={`${previousPost.routeName}`}> {`< previous`}</a>
        )) ||
          ""}
      </div>
      <div className="next-blog-post">
        {(nextPost && <a href={`${nextPost.routeName}`}> {`next >`}</a>) || ""}
      </div>
    </div>
  );
}

function Blog({ posts, postId }) {
  const [currentPostId, setCurrentPostId] = useState(null);
  const [previousPostId, setPreviousPostId] = useState(null);
  const [nextPostId, setNextPostId] = useState(null);

  function handlePostNavigation(currentPostId_) {
    /* update currentPost */
    setCurrentPostId(currentPostId_);

    /* calculate previous */
    if (isNaN(currentPostId_) || currentPostId_ === 0) {
      setPreviousPostId(null);
    } else {
      setPreviousPostId(currentPostId_ - 1);
    }

    /* calculate next */
    if (isNaN(currentPostId_) || currentPostId_ >= posts.length - 1) {
      console.log(posts.length);
      setNextPostId(null);
    } else {
      setNextPostId(currentPostId_ + 1);
    }
  }

  useEffect(() => {
    /* init previousPostId & nextPostId */
    if (posts && posts.length && isNaN(postId) === false) {
      handlePostNavigation(postId);
    }
  });

  if (posts && posts.length && isNaN(postId) === false) {
    return (
      <div className="container">
        <BlogPost post={posts[postId]} />
        <BlogPostNavigation
          previousPost={posts[previousPostId]}
          nextPost={posts[nextPostId]}
        />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="blog-toc">
        {BlogTableOfContents({ posts, handlePostNavigation })}
      </div>
    </div>
  );
}

export default Blog;
