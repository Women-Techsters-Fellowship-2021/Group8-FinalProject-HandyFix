import google from "../Images/google.jpg";
import fb from "../Images/fb.png";
import twitter from "../Images/twitter.png";
import { Link } from "react-router-dom";
import React from "react";
import "../styles/Login.css";

function Login() {
  return (
      <div>
      {/* <Navbar/> */}
    <div className="Login">
      <h1>LOGO</h1>
      <div className="Inner" >
      <div className="LoginForm">
        <h2>Great to see you again!</h2>
        <form>
          <label>Email</label>
          <input
            className="LoginInput"
            placeholder="@gmail"
            type="text"
            required
          ></input>

          <label>Password</label>
          <input
            className="LoginInput"
            placeholder="Password"
            type="text"
            required
          ></input>
        </form>
        <div className="forget">
          <Link to="#">forget password</Link>
        </div>
        <button type="submit" className="LoginBtn">
          {" "}
          Log In
        </button>
        <div className="LoginIcon">
          <img src={twitter} width={30} height={20} alt="" />
          <img src={fb} width={30} height={20} alt="" />
          <img src={google} width={30} height={20} alt="" />
        </div>
        <p>
          jhsdvhbsajhdbchsbgh
          <b />
          dbcghasbbhd
        </p>
      </div>

      <div className="LoginSecond">
        <div className="Para">
          {" "}
          <p>
            Our community of artisans are widely sought after,
            <br />
            Register to be part of this community
          </p>
          <br />
          <h4>Learn more...</h4>
          </div>
    </div>
      </div>
      <p>jhjkhklkljkljhujgkuj</p>
        </div>  
        </div>
  );
}
export default Login;
