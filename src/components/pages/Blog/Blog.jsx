import { useEffect, useState } from "react";
import { Center } from "@mantine/core";
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
  const [highlightedTags, setHighlightedTags] = useState([]);

  /* get proper min height to render 'sticky' footer */
  const [headerHeight] = useState(
    document.getElementsByClassName("mantine-Header-root")[0]?.offsetHeight ??
      64
  );
  const [footerHeight] = useState(
    document.getElementsByClassName("App-footer")[0]?.offsetHeight ?? 32
  );
  const [minHeight, setMinHeight] = useState(
    window.innerHeight - headerHeight - footerHeight
  );

  /** keep sticky footer  */
  useEffect(() => {
    function resizeHandler(e) {
      setMinHeight(e.target.innerHeight - headerHeight - footerHeight);
    }
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

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

  useEffect(() => {
    /* init previousPostId & nextPostId */
    if (posts && posts.length && isNaN(postId) === false) {
      handlePostNavigation(postId);
    }
  });

  function generateTagContainers(posts): TagContainer[] {
    /**
     * @todo this also might be solved via adding refs to each
     * Tag but atm I have no idea how to do it.
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
        /** @todo custom React Hook function to provide refs? */
        return [tag /* , useRef(tag) */];
      })
    );
    return rv;
  }

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
    <Center
      className="blog h-screen flex flex-row"
      style={{ height: minHeight }}
    >
      {BlogTableOfContents({
        posts,
        handlePostNavigation,
        setHighlightedTags,
      })}

      <BlogTags
        classNames="ml-20 w-96 h-max flex flex-wrap"
        tagContainers={generateTagContainers(posts)}
        highlightedTags={highlightedTags}
      />
    </Center>
  );
}

export default Blog;
