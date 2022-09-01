import React from 'react'

import { useState} from "react";
import {  useDispatch } from "react-redux";
import { getdata } from "./srmSlice";
import { useNavigate } from "react-router-dom";



function Register() {
  const navigate = useNavigate();
  // const nob = useSelector((state) => state.srm.count);
  // const actualdata = useSelector((state) => state.srm.Data);
  // console.log(actualdata,"I am actualdata in userlogin")
  
  // const admin = useSelector((state) => state.srm.AdminData);
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    firstname: "",
    phone: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(getdata(formValue));
   navigate("/userlogin");
    
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const navi = () => {
    navigate("/adminlogin");
  };

  return (
    <div>
      <h4> This is User Registration</h4>
      <form onSubmit={handlesubmit}>
        <span>Name : </span>{" "}
        <input
          type="text"
          value={formValue.firstname}
          name="firstname"
          onChange={handleChange}
          required
        ></input>
        <span>Phone : </span>
        <input
          type="phone"
          value={formValue.phone}
          name="phone"
          onChange={handleChange}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <br></br>
      <button onClick={navi}>Admin Login</button>
    </div>
  );
}

export default Register
