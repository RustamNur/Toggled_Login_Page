import React from "react";
import useLocalStorage from "use-local-storage";
import "./signup.css";

const Signup = (props) => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div>
      <div className="app" data-theme={theme}>
              <div className="container">
                  <div className="login">
          <h2>Sign Up</h2>
          <form>
            <label>E-mail</label>
            <input type="email" placeholder="Enter your e-mail" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <button>SIGN UP</button>
          </form>

          <p className="divider">
            <span>OR</span>
          </p>
          <div className="top">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="create">
            <p>Need an account?</p>
            <p className="change" onClick={()=>props.onDirect(true)}>LOGIN</p>
          </div>
        </div>
        <div className="theme-toggle">
          <i
            onClick={switchTheme}
            className="fa-solid fa-circle-half-stroke"
          ></i>
        </div>
      </div>
          </div>
          </div>
  );
};

export default Signup;
