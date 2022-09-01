import React from "react";
import {  useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { values } from "./srmSlice";
import {  useNavigate } from "react-router-dom";

function Userlogin() {
  const navigate = useNavigate();

  //const nob = useSelector((state) => state.srm.count);
  const actualdata = useSelector((state) => state.srm.Data);
  console.log(actualdata,"I am actualdata in userlogin")
  
//  const admin = useSelector((state) => state.srm.AdminData);
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    firstname: "",
    phone: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    if(actualdata.find((dat1) => dat1.firstname===formValue.firstname && dat1.phone===formValue.phone)){
      dispatch(values(formValue));
      navigate("/Home");
    }
    else{
      alert("Invalid Credentials")
    }
    
    
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
  const  register=()=>{
    navigate("/register")
  }

  return (
    <div>
      <h4> This is User login</h4>
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
      <button onClick={navi}>Admin Login</button><br></br><br></br>
      <span>New User?</span><button onClick={register}>Register</button>
    </div>
  );
}

export default Userlogin;
