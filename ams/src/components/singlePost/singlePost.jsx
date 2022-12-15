import "./singlePost.css";
import { Link } from "react-router-dom";
export default function SinglePost({ post }) {
  console.log(post);
  return (
    <div className="singlePost">
      {post ? (
        <div className="singlePostWrapper">
          {post.photo ? (
            <img className="singlePostImg" src={post.photo} alt="" />
          ) : (
            <img
              className="singlePostImg"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          )}
          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author:
              <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
              </Link>
            </span>
            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          <p className="singlePostDesc">{post.desc}</p>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
