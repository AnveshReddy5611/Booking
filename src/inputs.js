import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendtime, Delete} from "./srmSlice";

function Inputs() {
  const dispatch = useDispatch();
  const [data, setData] = useState({ time: "" });
  const times = useSelector((state) => state.srm.CreatedTime);
  localStorage.setItem("CreatedTime", JSON.stringify(times));
  var data1 = JSON.parse(localStorage.getItem("CreatedTime"));

  const handleChange = (e) => {
    //setData(e.target.value)

    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data, "I am data");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(data, "i am submitted");
    if (data1.find((dat1) => dat1.time === data.time || data.time==="")) {
      alert("Please select some other time as it was already generated");
    } else {
      dispatch(sendtime(data));
    }
  };
 
  return (
    <div>
      <br></br>

      <form onSubmit={handleSubmit}>
        <label>Select a time : </label>
        <input type="time" name="time" onChange={handleChange} />
        <button type="submit"> Submit</button>
      </form>
      <br></br>
      <h4>Created Timeslots</h4>
      {data1.map((ele, index) => (
        <div key={index}>
          <button>{ele.time}</button>
          {/* <button onClick={dispatch(Delete(ele))}>Delete</button> */}
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default Inputs;
