import { useState } from "react";
import ChangeQuantity from "./ChangeQuantity";
import { addItemToCart } from "./redux/cartSlice";
import { useDispatch } from "react-redux";
import Description from "./Description";

const Furniture = ({furniture}) =>{
  const [quantity,setQuantity]=useState(1);
  const dispatch=useDispatch();
    return ( <div>
  
  <img className="furnImg" src={furniture.image} alt="furniture"/>
  <h3>{furniture.namef}</h3>
  <h4>${furniture.price}</h4>
 

  <Description description={furniture.description}/>
  <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
  <button  onClick={()=>{dispatch(addItemToCart({furniture,quantity}))}}>Add to cart</button>

    </div>

    )
}


export default Furniture;