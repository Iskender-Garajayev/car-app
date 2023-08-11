import React from "react";
import Card from "./Product/Card";

const HomeScreen = () => {
  return (
    <div className=" w-[1600px] ml-auto mr-auto mt-5 flex">
      {/* sidevar */}
      <div className=" flex-[3] ">
        <div className=" w-[368px] h-[700px] bg-slate-500 ml-auto mr-auto ">
          <ul>
            <li>Maker & Model</li>
            <li>Keyword</li>
            <li>Price</li>
            <li>Year</li>
            <li>Kilometres</li>
            <li>Features</li>
            <li>Transmission</li>
            <li>Drivetrain</li>
            <li>Fuel type</li>
            <li>Body type</li>
            <li>Seats</li>
            <li>Doors</li>
          </ul>
        </div>
      </div>
      

      {/* products */}

      <Card/>
      
    </div>
  );
};

export default HomeScreen;
