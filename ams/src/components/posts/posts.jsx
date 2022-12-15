import Post from "../post/Post";
import "./posts.css";
export default function Posts({ posts }) {
  let key = 0;
  return (
    <div className="posts">
      {/* {console.log(posts)} */}
      {posts.map((p) => {
        return <Post post={p} key={key++} />;
      })}
    </div>
  );
}
