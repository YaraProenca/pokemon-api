import React from "react";
import './PokePics.css'
const pokePics = ({id, name, image, type})=>{

  return(
    <div className="pic-container">
      <div className="number">
          <small>#0{id}</small>
      </div>

      <img src={image} alt={name} />

      <div className="information">
        <h3>{name}</h3>
        <small>Type: {type}</small>
      </div>
    </div>
  )
}

export default pokePics