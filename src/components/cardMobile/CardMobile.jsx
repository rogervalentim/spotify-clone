import React from 'react'
import "./CardMobile.css"

const CardMobile = ({ title, subtitle, image}) => {
  return (
    <div className="card-mobile">
      <img src={image} alt={title} />
      <div className="name-artist">
      <p>{title}</p>
      </div>
    </div>
  )
}

export default CardMobile