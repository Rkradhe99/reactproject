import React from 'react'
import Card from './Cards'
import Footer from './Footer'
import { Link } from 'react-router-dom'



export default function Menu() {
  return (
    <div>
     
      
      <div style={{display:"flex",marginLeft:"111px",margin:"100px",marginTop:"15px"}}>
      <Card name={"French Fries"}
      image={"https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8w=1000q=80"}
      details={"A Delicious Dish of Fresh Potatoes that make you yummm.."}
      price={"Price = Rs.100"}
      />
      <Card name={"Coke"}
      image={"https://static3.bigstockphoto.com/8/1/3/large1500/318019525.jpg"}
      details={"A Refreshing Cold drink which makes you child insidely"}
      price={"Price = Rs.40"}
      />
      <Card name={"Cheese Burger"}
      image={"https://image.shutterstock.com/image-photo/tasty-appetizing-hamburger-cheeseburger-260nw-1053796058.jpg"}
      details={"Life is too short to miss out on double cheeseburgers"}
      price={"Price = Rs.50"}
      /> </div>
      <div style={{display:"flex",margin:"100px",
      marginTop:"-150px",padding:"10px"}}>
      <Card name={"Pasta"}
      image={"https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/arrabiata-pasta-2.jpg"}
      details={"Eat pasta, live longer, Duct tape and pasta are alike. They fix everything!"}
      price={"Price = Rs.80"}
      />
      <Card name={"Noodles"}
      image={"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg"}
      details={"Peace will come to the world when the people have noodles to eat."}
      price={"Price = Rs.60"}
      />
      <Card name={"Veg. Manchurian"}
      image={"https://www.healthbenefitsup.com/wp-content/uploads/2020/01/Vegetarian-manchurian-1.jpeg"}
      details={"Gravy Manchurian with sauce, Literally my love of the weekend."}
      price={"Price = Rs.100"}
      />
      </div>
      <div style={{background:"blue",margin:"20px", width:"175px",display:"flex",textAlign:"center",fontSize:"15px",border:"2px solid grey",borderRadius:"2px",marginLeft:"650px",marginTop:"-125px"}}>
      <Link style={{textDecoration:"none",margin:"14px",color:"white",fontWeight:"bolder"}} to="/checkout">Confirm Your Order</Link>
      </div>
      <Footer></Footer>
      
    </div>
    
  )
}
