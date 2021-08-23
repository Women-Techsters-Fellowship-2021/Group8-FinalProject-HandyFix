function SignUp() {
  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      <div className="SignUpHead">
        <h3>Welcome to HandyFix</h3>
      </div>
      <div className="SignUpForm">
        <input
          className="SignUpInput"
          placeholder="Full Name"
          type="text"
        ></input>
        <input
          className="SignUpInput"
          placeholder="Location"
          type="text"
        ></input>
        <input
          className="SignUpInput"
          placeholder="Emial Address"
          type="text"
        ></input>
        <input
          className="SignUpInput"
          placeholder="Password"
          type="text"
        ></input>
        <input
          className="SignUpInput"
          placeholder="Confirm Password"
          type="text"
        ></input>
      </div>
      <div className="TandC">
        <input type="checkbox" className="SignUpcheckbox" required></input>
        <a href="">I agree to the term and condition of this project</a>
      </div>
       <div className="SignUpCtn"> 
      <button type="submit"  className="SignUpCtn">
        Continue
      </button>
      </div>
    </div>
  );
}
export default SignUp;
