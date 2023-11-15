import React from "react";
import useLocalStorage from "use-local-storage";
import "./login.css";

const Login = (props) => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <div className="container">
        <div className="login">
          <h2>LOGIN</h2>
          <form>
            <label>E-mail</label>
            <input type="email" placeholder="Enter your e-mail" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <div className="remember">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <button>LOGIN</button>
          </form>
          <div className="bottom">
            <p style={{ cursor: "pointer" }}>Forget Password?</p>
            <br />
          </div>
          <p className="divider">
            <span>OR</span>
          </p>
          <div className="top">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="create">
            <p className="change" onClick={() => props.onDirect(false)}>
              SIGN UP
            </p>
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
  );
};

export default Login;
