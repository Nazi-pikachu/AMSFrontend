import Header from "../../components/header/Header";
import Posts from "../../components/posts/posts";
// import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8000/api/listPatient");
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Header />
      {console.log(posts.length)}
      <div className="home">
        <Posts posts={posts} />
        {/* {posts.length && console.log(posts) && <Posts posts={posts} />} */}
        {/* <Sidebar /> */}
      </div>
    </div>
  );
}
