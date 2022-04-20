import "../styles/SignUp.css";
import google from "../Images/google.jpg";
import fb from "../Images/fb.png";
import twitter from "../Images/twitter.png";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { toast  } from "react-toastify";



const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
  });

  const [validationErrorMsg, setValidationErrorMsg] = useState({
    confirmPassword:""
  })

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const isValid = validatePassword()
    // if(isValid){
    if (userData.password === userData.confirmPassword) {
      setSignUpDetails({
        email: userData.email,
        password: userData.password,
      });
      toast.success("SignUp succesful") 
      console.log("=====>", signUpDetails);
      e.target.reset();
    } else {
      setValidationErrorMsg({
        confirmPassword:"password does not match"
      })
     
    }
  };
  // console.log("=====>", signUpDetails);

  return (
    <div className="SignUp">
      <h1>LOGO</h1>
      <div className="Inner">
        <div className="SignUpForm">
          <h3> Sign In to HandyFix</h3>
          <div className="SignUpIcon">
            <img src={twitter} width={30} height={20} alt="" />
            <img src={fb} width={30} height={20} alt="" />
            <img src={google} width={30} height={20} alt="" />
          </div>

          <div>
            <form onSubmit={handleSubmit}>
            
              <label>Email</label>
              <input
                className="SignUpInput"
                placeholder="@gmail"
                type="text"
                id="email"
                required
                onChange={handleChange}
              />

              <label>Password</label>
              <input
                className="SignUpInput"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required
                onChange={handleChange}
              />
              <label>Confirm password</label>

              <input

                className="SignUpInput"
                type="password"
                placeholder="ConfirmPassword"
                id="confirmPassword"
                required
                onChange={handleChange}
              />
              <small className="Error">{validationErrorMsg.confirmPassword}</small>

              <div className="TandC">
                <div id="flexer">
                  <div id="innerFlexer">
                    <input type="checkbox" className="SignUpcheckbox"></input>
                    <label>Remember me?</label>
                  </div>
                  <div>
                    {" "}
                    <div>
                      <Link to="#">forgot password?</Link>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <button type="submit" className="SignUpBtn">
                {" "}
                Sign Up
              </button>
        
            </form>
          </div>

          <div className="Already">
            {" "}
            <p>
              Already have an account?<Link to="/Login">LogIn</Link>
            </p>
          </div>
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
            <h4>Begin the proces!</h4>
          </div>
        </div>
      </div>
      <p>Copyright © 2021.HandyFix. All rights reserved</p>
    </div>
  );
};
export default SignUp;
