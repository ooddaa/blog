import BlogTopic from "./BlogTopic";
import { H3, resolveMonth, log } from "../../../../toolbox";

function BlogTOCGroup({ year, month, posts, onClick, setHighlightedTags }) {
  // function highlightTags(
  //   tags: string[],
  //   config: { clear: boolean } = { clear: false }
  // ) {}
  return (
    <div className="blog__toc-group flex-col p-10 w-2/3 shadow">
      <div className="blog__toc-group__head ">
        <H3>{resolveMonth(month, { short: false })}</H3>
      </div>
      <div className="blog__toc-group__body">
        {posts.map((post) => (
          <BlogTopic
            key={post.id}
            post={post}
            onClick={onClick}
            setHighlightedTags={setHighlightedTags}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogTOCGroup;
