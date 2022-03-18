import welcome from "./components/welcome";
import BlogPost from "../Blog/components/BlogPost";
function Main() {
  return (
    <div className="main">
      <div className="container">{<BlogPost post={welcome} />}</div>
    </div>
  );
}

export default Main;
