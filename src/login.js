import React from "react";

import { useNavigate } from "react-router-dom";

function Login() {

  var today = new Date()
  const timeh=today.getHours()
  const timem=today.getMinutes()
  console.log(timeh,"I am date")
  if(timeh===0 && timem===0){
  setTimeout(() => {
    console.log('Hello Timeout!')    
 }, 1000);}
  
  const navigate = useNavigate();

  const navi = () => {
    navigate("/adminlogin");
  };
  const change = () => {
    navigate("/userlogin");
  };
  const  register=()=>{
    navigate("/register")
  }
  return (
    <div>
      <button onClick={navi}>Admin Login</button>
      <button onClick={change}>User Login</button>
      <span>New User?</span><button onClick={register}>Register</button>
    </div>
  );
}
export default Login;
