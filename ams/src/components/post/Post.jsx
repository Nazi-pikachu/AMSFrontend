import "./Post.css";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  return (
    <div className="post">
      {/* {console.log(post)} */}
      {post.photo ? (
        <img className="postImg" src={post.photo} alt="" />
      ) : (
        <img
          className="postImg"
          src="https://cdn-icons-png.flaticon.com/512/4323/4323004.png"
          alt=""
        />
      )}

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Name : {post.name}</span>
          <p className="postCat">Gender: {post.gender}</p>
          <p className="postCat">Age: {post.age} yrs</p>
          {post.address && <p className="postCat">Address: {post.address}</p>}
          <p className="postCat">Ph NO: {post.phone}</p>
          <p className="postCat">email: {post.email}</p>
        </div>
        <hr />
        {/* <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span> */}
      </div>
    </div>
  );
}
