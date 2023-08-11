import React from "react";
import './card.css'
import carData from "../../data/carData";

const Card = () => {
  return (

    
      <div className=" flex-[8] grid grid-cols-4 center gap-4  ">
        {carData.map((card) => (
          <div key={card._id} className="card w-[282px] h-[355px] shadow-lg rounded-lg border border-gray-300 items-end hover:shadow-2xl hover:transition-[.4]">
            <img src={card.images.img} alt="" className=" w-[282px] h-[160px] object-cover " />
            <p>{card.year}</p>
            <span> {card.model}</span>
          </div>
        ))}
      </div>
    
  );
};

export default Card;
