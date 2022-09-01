import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { empty, Remove } from "./srmSlice";

function AdminHome() {
  const dispatch = useDispatch();
  const booked = useSelector((state) => state.srm.Booked);
  console.log(booked, "I am Booked");
  localStorage.setItem("booked", JSON.stringify(booked));
  var data = JSON.parse(localStorage.getItem("booked"));

   data=data.sort((a, b) => {
    return a.name - b.name})


  return (
    <div>
      <h4>Booked Timeslots</h4>
      {data.map((ele, index) => (
        <div key={index}>
          <h5>
            {ele.name},{ele.time}
          </h5>
          <button onClick={() => dispatch(Remove(ele))}>Clear</button>
          
        </div>
      ))}
      <button onClick={() => dispatch(empty())}>Clear Timeslots</button>
      <Link to="src/inputs">
        <button>Create Timeslot</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default AdminHome;
