import React from 'react'
import carData from '../data/carData'

const Card = () => {
  return (
    <div>
      

        {carData.map((card) => (
            <div key={card._id}>
                {card._id}
                <img src={card.img} alt="" />
                <span>{card.make}</span>
            </div>
        ))}


    </div>
  )
}

export default Card
