import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/singlePost";
import "./Single.css";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Single() {
  const [post, setPost] = useState();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:3000/api/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  // console.log(post);
  return (
    <div className="single">
      <SinglePost post={post} />
      <Sidebar />
    </div>
  );
}
