import React from "react";
import Card from "./Card";

const HomeScreen = () => {
  return (
    <div className=" w-[1600px] ml-auto mr-auto flex ">
      {/* sidevar */}
      <div className=" flex-[3] ">
        <div className=" w-[368px] h-[700px] bg-slate-500 ml-auto mr-auto "></div>
      </div>
      

      {/* products */}

      <Card/>
      
    </div>
  );
};

export default HomeScreen;
