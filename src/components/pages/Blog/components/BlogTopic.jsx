import { Link } from "react-router-dom";
import { log } from "../../../../toolbox";
export default function BlogTopic({ post, onClick, setHighlightedTags }) {
  const day = post.dateCreated[2];
  return (
    // https://tailwindcss.com/docs/flex
    <div className="blog__topic flex gap-x-4 ">
      <div className="blog__topic__head w-10 font-bold shrink-0 p-1 text-lg">
        {day}
      </div>
      <div
        className="blog__topic__body p-1 text-md hover:text-white"
        onMouseEnter={() => {
          setHighlightedTags?.(post.tags);
        }}
        onMouseLeave={() => {
          setHighlightedTags?.([]);
        }}
      >
        {
          <Link to={post.routeName} onClick={() => onClick(post.id)}>
            {post.header}
          </Link>
        }
      </div>
    </div>
  );
}
