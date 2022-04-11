import React from "react";
import {Link, Navigate,Route} from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

function Page1() {
 
  // const pushpage = () =>{
  //   <Route path="/" element={<Navigate to ="/menu" />}/>
 
  
  // }
  return (
    <>
  
      <div
        className="pg1"
        style={{
          padding: "150px",
          background: "whitesmoke",
        }}
      >
        <div className="heading">
          <h1 style={{textAlign:"center"}}>
            Welcome to the Food's Kitchen
          </h1>
        </div>
        {/* <div className="para">
          <h5>
            “Hello to You! You will find food, harmony, and laughter here. “Need
            food and a good place to eat? Welcome to our humble place where you
            can eat good food peacefully.”“We welcome your appetite. Let our
            food satisfy your stomach.” Let Food Be Thy Medicine, And Let Thy
            Medicine Be Food.
          </h5>
        </div> */}
        <div style={{background:"blue",display:"flex",width:"100px",border:"1px solid grey",margin:"30px",marginLeft:"540px"}}>
      <Link style={{textDecoration:"none",margin:"5px",color:"white",font:"bolder"}} to="/menu" >Go To Menu</Link></div>
       
      </div>
      <Footer></Footer>
    </>
  );
}
export default Page1;
