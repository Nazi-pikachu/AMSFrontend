import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import server_url from "../../utils";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(server_url + "/api/addAdmin", {
        username,
        password,
      });
      res.data && window.location.replace("/login");
      console.log(res);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerform" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <label htmlFor="">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter yout password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        {error && <span>Something went wrong!!!</span>}
      </form>
    </div>
  );
}
