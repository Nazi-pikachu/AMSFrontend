import "./Sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [cats, setCat] = useState([]);
  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get("http://localhost:3000/api/categories/");
      setCat(res.data);
    };
    fetchCats();
  }, []);
  // console.log(cats);
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <li className="sideBarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle"> FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-facebook-square"></i>
          <i className="sideBarIcon fa-brands fa-twitter-square"></i>
          <i className="sideBarIcon fa-brands fa-pinterest-square"></i>
          <i className="sideBarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
