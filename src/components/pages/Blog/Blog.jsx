import { useEffect, useState } from "react";
import { Center } from "@mantine/core";
import BlogPost from "./components/BlogPost";
import BlogPostNavigation from "./components/BlogPostNavigation";
import BlogTOC from "./components/BlogTOC";
import BlogTags from "./components/BlogTags";
import { log } from "../../../toolbox/index";
import { TagContainer } from "../../../toolbox/types.d.ts";
import flatten from "lodash/flatten";
import identity from "lodash/identity";

function Blog({ posts, postId }) {
  /* State
  ________________________________________________________________*/

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

  const [filteredPosts, setFilteredPosts] = useState(posts ?? []);
  const [clickedTags, setClickedTags] = useState(new Set());

  /* !state
  ________________________________________________________________*/

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

  function getClickedTag(tag) {
    /* Tag gets clicked, Blog knows about it. */

    if (clickedTags.has(tag)) {
      /* user is trying to remove tag from filter */
      clickedTags.delete(tag);
      setClickedTags(new Set([...clickedTags]));
    } else {
      /* user is adding tag to filter*/
      clickedTags.add(tag);
    }

    /* posts must be filtered as per clickedTags */
    let filtered;
    if (clickedTags.size === 0) {
      filtered = posts;
    } else {
      filtered = posts.filter(({ tags }) => {
        const rv = tags
          .map(isInClickedTags) // clickedTags set has any of these tags
          .some(identity); // which are true
        return rv;
      });
    }
    setFilteredPosts(filtered);

    //////////////////// FUN ////////////////////
    function isInClickedTags(x) {
      return clickedTags.has(x);
    }
  }

  return (
    <div
      className="blog flex flex-col sm:flex-row content-center"
      style={{ minHeight }} // keeps footer sticky
    >
      <div className="left basis-full -mt-24 pb-24 sm:basis-3/5 bg-[#FA592D]">
        {BlogTOC({
          posts: filteredPosts,
          handlePostNavigation,
          setHighlightedTags,
          classNames: ["pt-48"],
        })}
      </div>

      <div className="right basis-2/5 -mt-24 pb-24 bg-[#E9EAEC]">
        <BlogTags
          tagContainers={generateTagContainers(posts)}
          highlightedTags={highlightedTags}
          sendTagUp={getClickedTag}
          classNames={[
            // "basis-1/4 pt-24 w-96 h-max mx-auto",
            "pt-48 w-96 mx-auto mb-20 sm:mt-0 sm:mb-10 md:ml-16 sm:ml-10 h-max p-max",
            // "basis-1/4 pt-24 w-96 px-auto pb-20 sm:pt-0 sm:pb-10 md:pl-16 sm:pl-10 h-max p-max",
          ]}
        />
      </div>
    </div>
  );
}

export default Blog;
