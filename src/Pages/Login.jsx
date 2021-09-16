import google from "../Images/google.jpg";
import fb from "../Images/fb.png";
import twitter from "../Images/twitter.png";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log( "=====>", loginDetails);
    setLoginDetails("")
    e.target.reset()
  };
  console.log( "=====>", loginDetails);
  
  return (
    <div>
     
      <div className="Login">
        <h1>LOGO</h1>
        <div className="Inner">
          <div className="LoginForm">
            <h2>Great to see you again!</h2>

            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                className="SignUpInput"
                placeholder="@gmail"
                type="text"
                id="email"
                name="email"
                required 
                onChange = { handleChange }
               
              />

              <label>Password</label>
              <input
                className="SignUpInput"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required
                onChange = { handleChange }
              
              />
              <div className="forget">
                <Link to="#">forgot password?</Link>
              </div>
              <button type="submit" className="LoginBtn">
                {" "}
                Log In
              </button>
            </form>

            <div className="LoginIcon">
              <img src={twitter} width={30} height={20} alt="" />
              <img src={fb} width={30} height={20} alt="" />
              <img src={google} width={30} height={20} alt="" />
            </div>
            <p>
              Dont have an account? 
              <b />
              Create an Account
            </p>
          </div>

          <div className="Second">
          <button type="submit" className="Con">
            {" "}
            Conveniency
          </button>
          <button type="submit" className="Safe">
            {" "}
            Safety
          </button>
          <button type="submit" className="Quality">
            {" "}
            Quality
          </button>
          <div className="Secondus">
            <p>A full value product you'll love</p>
            <br />
            <h6>Begin the proces!</h6>
          </div>
        </div>
      
        </div>
        <p>Copyright © 2021.HandyFix. All rights reserved</p>
      </div>
    </div>
  );
};
export default Login;
