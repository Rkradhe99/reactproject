import React from 'react'
import { Link } from "react-router-dom";

export default function Pages() {
  return (
    <>
    <div style={{background:"blue", display:"flex"}}>
      <h4 style={{margin:"10px",color:"white"}}>Food's Restaurant</h4>
      <Link style={{textDecoration:"none",margin:"14px",color:"white"}} to="">Home</Link>
      {/* <Link style={{textDecoration:"none",margin:"14px",color:"white"}} to="/menu" >Menu</Link> */}
      {/* <Link style={{textDecoration:"none",margin:"14px",color:"white"}} to="/checkout">Checkout</Link> */}
    </div>
    
    </>
  )
}
