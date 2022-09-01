import React, { useState } from "react";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

function Adminlogin() {
  const navigate = useNavigate();
 // const nob = useSelector((state) => state.srm.count);
  const admin = useSelector((state) => state.srm.AdminData);
  //const dispatch = useDispatch();
  const [adminformValue, setadminFormValue] = useState({
    firstname: "",
    phone: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(adminformValue);
    if (JSON.stringify(adminformValue) === JSON.stringify(admin)) {
      navigate("/adminHome");
    } else {
      alert("INCORRECT CREDENTIALS");
    }
  };
  const change = () => {
    navigate("/userlogin");
  };

  const handleChange = (event) => {
    setadminFormValue({
      ...adminformValue,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <h4> This is Admin Login</h4>
      <form onSubmit={handlesubmit}>
        <span>Name : </span>{" "}
        <input
          type="text"
          value={adminformValue.firstname}
          name="firstname"
          onChange={handleChange}
          required
        ></input>
        <span>Phone : </span>
        <input
          type="phone"
          value={adminformValue.phone}
          name="phone"
          onChange={handleChange}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <br></br>
      <button onClick={change}>User Login</button>
    </div>
  );
}

export default Adminlogin;

