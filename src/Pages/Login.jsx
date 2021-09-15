import google from "../Images/google.jpg";
import fb from "../Images/fb.png";
import twitter from "../Images/twitter.png";
import { Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = 
  (data) => {
    //  e.preventDefault()
    console.log(data);
  };
  return (
      <div>
      {/* <Navbar/> */}
    <div className="Login">
      <h1>LOGO</h1>
      <div className="Inner" >
      <div className="LoginForm">
        <h2>Great to see you again!</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
            className="SignUpInput"
            placeholder="@gmail"
            type="text"
            id="Email"
            name="Email"
            required
            {...register("email")}
          />

          <label>Password</label>
          <input
          className="SignUpInput"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          required
          {...register("password")}
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
