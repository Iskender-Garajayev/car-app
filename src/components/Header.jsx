import React from "react";
import Logo from "../img/Vector.png";
import Search from "../img/Frame.png";

const Header = () => {
  return (
    <div className=" w-full bg-slate-400">

      <div className=" flex items-center h-[88px] w-[1600px] bg-red-300 ml-auto mr-auto">

      {/* logo start */}
      <div className="flex items-center justify-center w-[177px]">
        <img src={Logo} alt=""/>
      </div>
      {/* logo end */}

      {/* search bar start */}
      <form action="" className="flex items-center w-[422px] h-16 p-4 border ml-4 mr-4 justify-between">
        <input type="text" className=" outline-none items-center"/>
        <img src={Search} alt="" className="h-[24px] w-[24px]" />
      </form>
      {/* search bar end */}
      
      {/* navbar start */}

      {/* navbar end */}

      {/* user start */}

      {/* user end */}



      </div>


    </div>
  );
};

export default Header;
