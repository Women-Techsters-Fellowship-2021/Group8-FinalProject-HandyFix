function Login() {
  return (
    <div className="App">
      <div className="Loginh1">
        <h1>HandyFix </h1>
      </div>
      <div>
        <h2 className="Loginh2">Login</h2>
      </div>
      <div className="Loginform">
        <input
          className="Login"
          placeholder="Email Address"
          type="text"
        ></input>
        <input className="Login" placeholder="Password" type="text"></input>
        <button className="Loginbtn" type="submit">
          Continue
        </button>
        <p className="LoginP">OR</p>
        <button className="Loginbtn" type="submit">
          Sign in with google
        </button>
      </div>
      <div className="forgetpassword">
        <p>
          <b>forget password?</b>
        </p>
        <p>sign in</p>
      </div>
    </div>
  );
}

export default Login;
