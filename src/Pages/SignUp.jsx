import "../styles/SignUp.css";
import google from "../Images/google.jpg";
import fb from "../Images/fb.png";
import twitter from "../Images/twitter.png";
import { Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
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
              <label>Confirm password</label>

              <input
                className="SignUpInput"
                type="Confirmpassword"
                placeholder="ConfirmPassword"
                id="Confirmpassword"
                name="confirmpassword"
                required
                {...register("Comfirmpassword")}
              />
            
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
              Sign in
            </button>
            </form>
            </div>
         
          <div className="Already">
            {" "}
            <p>
              Already have an account?<Link to="#">LogIn</Link>
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
      <p>jhjkhklkljkljhujgkuj</p>
    </div>
  );
};
export default SignUp;
