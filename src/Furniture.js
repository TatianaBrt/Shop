import { useState } from "react";
import ChangeQuantity from "./ChangeQuantity";
import { addItemToCart } from "./redux/cartSlice";
import { useDispatch } from "react-redux";
import Description from "./Description";




const Furniture = ({furniture}) =>{
  const [quantity,setQuantity]=useState(1);
 

  const dispatch=useDispatch();
  const showAlert=()=>{
 alert ('Goods added to cart!')
  }

    return ( 
  <div className="container">
    <div className="product-card">
  <img className="furnImg" src={furniture.image} alt="furniture"/>

  <h3>{furniture.namef}</h3>
  <h4 className="price">$ {furniture.price}</h4>

  <Description description={furniture.description}/>


  <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>



  <button className="btnAdd" onClick={()=>{dispatch(addItemToCart({furniture,quantity}));showAlert()}} >Add to cart</button>
  
  </div>
  </div>
 
     )
    
}


export default Furniture;