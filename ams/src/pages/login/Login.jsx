import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import server_url from "../../utils";

export default function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(server_url + "/api/authAdmin", {
        userName,
        password,
      });
      setLoggedIn(res.data.is);
      if (res.data.is) {
        localStorage.setItem("is", "True");
        window.location.replace("/admin");
      } else window.location.replace("/register");
      console.log(isLoggedIn);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginform" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter yout password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}
