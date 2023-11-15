import React, {useState} from "react";
import "./App.css";
import Login from "./components/login/login.jsx";
import Signup from "./components/signup/signup.jsx";

function App() {
  const [change,  setChange] = useState(true)

  const reDirect = (value) => {
   
    setChange(value)
  }

  return (
    <div>
      {change ? <Login onDirect={reDirect} /> : <Signup onDirect={reDirect} />}
      
    </div>
  );
}

export default App;
