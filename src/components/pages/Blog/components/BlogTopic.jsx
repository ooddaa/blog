import { Link } from "react-router-dom";
import { log } from "../../../../toolbox";
export default function BlogTopic({ post, onClick, setHighlightedTags }) {
  const day = post.dateCreated[2];
  return (
    // https://tailwindcss.com/docs/flex
    <div className="blog__topic flex gap-x-4 ">
      <div className="blog__topic__head w-10 font-bold shrink-0 ">{day}</div>
      <div
        className="blog__topic__body p-1"
        onMouseEnter={() => {
          log(`post ${post.id} here`);
          setHighlightedTags?.(post.tags);
        }}
        onMouseLeave={() => {
          log(`post ${post.id} there`);
          setHighlightedTags?.([]);
          // setHighlightedTags?.(post.tags, { clear: true });
        }}
      >
        {
          <Link to={post.routeName} onClick={(e) => onClick(post.id)}>
            {post.header}
          </Link>
        }
      </div>
    </div>
  );
}
