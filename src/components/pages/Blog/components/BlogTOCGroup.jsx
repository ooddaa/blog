import { Center, Container, MantineProvider, Stack } from "@mantine/core";
import { Link } from "react-router-dom";
import { H3, resolveMonth } from "../../../../toolbox";

function BlogTopic({ post, onClick }) {
  const [_, month, day] = post.dateCreated;
  return (
    // https://tailwindcss.com/docs/flex
    <div className="blog__topic flex gap-x-4 ">
      <div className="blog__topic__head w-10 font-bold shrink-0 ">{day}</div>
      <div className="blog__topic__body ">
        {
          <Link to={post.routeName} onClick={(e) => onClick(post.id)}>
            {post.header}
          </Link>
        }
      </div>
    </div>
  );
}

function BlogTOCGroup({ year, month, posts, onClick }) {
  return (
    <div className="blog__toc-group flex-col pb-10 w-2/3">
      <div className="blog__toc-group__head ">
        <H3>{resolveMonth(month, { short: false })}</H3>
        {/* <H3>{resolveMonth(month, { short: true })}</H3> */}
      </div>
      <div className="blog__toc-group__body">
        {posts.map((post) => (
          <BlogTopic key={post.id} post={post} onClick={onClick} />
        ))}
      </div>
    </div>
  );
}

export default BlogTOCGroup;
