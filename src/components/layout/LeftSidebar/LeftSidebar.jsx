import { Fragment } from 'react'
import BlogTitle from "./BlogTitle";
import PostsNav from "./PostsNav";

function LeftSidebar() {
  return (
    <div className='left-sidebar'>
        <BlogTitle />
        <PostsNav />
    </div>
  )
}

export default LeftSidebar