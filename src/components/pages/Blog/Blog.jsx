import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import BlogPostNavigation from "./components/BlogPostNavigation";
import BlogTableOfContents from "./components/BlogTableOfContents";

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
      <>
        <BlogPost post={posts[postId]} />
        <BlogPostNavigation
          previousPost={posts[previousPostId]}
          nextPost={posts[nextPostId]}
        />
      </>
    );
  }
  return (
    <div className="blog-toc">
      {BlogTableOfContents({ posts, handlePostNavigation })}
    </div>
  );
}

export default Blog;
