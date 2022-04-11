import React, { useState } from "react";
import style from "./Cards.css";
function Card({name,details,price,image}) {
  const[count,setcount]= useState(0);
  const addcount = () =>{
    setcount(count+1)
  }
  const minuscount = () =>{
    setcount(count-1)
  }
  return (
    <>
      <div className="cards">
        <div className="card">
          <img
            src={image}
            alt="Error loading image"
          />
          <div className="title"><h4><u>{name}</u></h4></div>
          <div className="detail">{details} </div>
          <div className="price">{price}</div>
          <div className="buttons"><input type="button" onClick={() => minuscount()} value=" - " /><h5>{count}</h5>
          <input type="button" onClick={() => addcount()} value=" + " /></div>
        </div>
      </div>
    </>
  );
}
export default Card;
