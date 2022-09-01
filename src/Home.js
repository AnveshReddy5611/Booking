import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addandremove } from "./srmSlice";

function Home() {
  const dispatch = useDispatch();
  const available = useSelector((state) => state.srm.CreatedTime);
  const currentuser = useSelector((state) => state.srm.name);
  const times=useSelector((state)=>state.srm.Booked)
  localStorage.setItem("CreatedTime", JSON.stringify(available));
  var data = JSON.parse(localStorage.getItem("CreatedTime"));
  
  
  const handleSubmit = (e,currentuser) => {
    console.log(currentuser,"I am current user")
   
    dispatch(addandremove([e,currentuser]));   
  };
  return (
    <div>
      <span>Book a TimeSlot</span>
      {data?.map((ele, index) => (
        <div key={index}>
          <button>{ele.time} </button>
          <button onClick={() => handleSubmit(ele,currentuser)}>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
