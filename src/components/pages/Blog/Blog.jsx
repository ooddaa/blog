import { useEffect, useState, useRef } from "react";
import { Center } from "@mantine/core";
import { Link } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import BlogPostNavigation from "./components/BlogPostNavigation";
import BlogTableOfContents from "./components/BlogTableOfContents";
import BlogTags from "./components/BlogTags";
import { log } from "../../../toolbox/index";
import { TagContainer } from "../../../toolbox/types.d.ts";
import flatten from "lodash/flatten";

function Blog({ posts, postId }) {
  const [currentPostId, setCurrentPostId] = useState(null);
  const [previousPostId, setPreviousPostId] = useState(null);
  const [nextPostId, setNextPostId] = useState(null);
  const [highlightedTags, setHighlightedTags1] = useState([]);

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
      // console.log(posts.length);
      setNextPostId(null);
    } else {
      setNextPostId(currentPostId_ + 1);
    }
  }

  function generateTagContainers(posts): TagContainer[] {
    /**
     * @todo this also needs to add refs but atm I
     * have no idea how to do it.
     * @param {Set} acc
     * @param {Post} post
     */
    function postsToTags(acc, post) {
      post?.tags?.forEach((elm) => acc.add(elm));
      return acc;
    }

    const allTags: Set = posts.reduce(postsToTags, new Set());

    const arr = Array.from(allTags.values());
    const rv: TagContainer[] = flatten(
      arr.map((tag) => {
        /* custom React Hook function to provide refs? */
        return [tag /* , useRef(tag) */];
      })
    );
    return rv;
  }

  function setHighlightedTags(tags: string[]) {
    log("setHighlightedTags fires: ", tags);
    setHighlightedTags1(tags);
  }

  useEffect(() => {
    /* init previousPostId & nextPostId */
    if (posts && posts.length && isNaN(postId) === false) {
      handlePostNavigation(postId);
    }
  });

  if (posts?.length && isNaN(postId) === false) {
    return (
      <Center className="flex-row">
        <div>
          <BlogPost post={posts[postId]} />
          <BlogPostNavigation
            previousPost={posts[previousPostId]}
            nextPost={posts[nextPostId]}
          />
        </div>
      </Center>
    );
  }

  return (
    <Center className="h-screen flex-row">
      <div className="blog-toc">
        {BlogTableOfContents({
          posts,
          handlePostNavigation,
          setHighlightedTags,
        })}
        {/* <BlogTableOfContents
          posts={posts}
          handlePostNavigation={handlePostNavigation}
          setHighlightedTags={setHighlightedTags}
        /> */}
      </div>

      <BlogTags
        classNames="ml-20 w-96 h-max flex flex-wrap"
        tagContainers={generateTagContainers(posts)}
        highlightedTags={highlightedTags}
      />
    </Center>
  );
}

export default Blog;
