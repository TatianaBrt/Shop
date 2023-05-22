import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "./redux/cartSlice";


import StripeContainer from "./Stripe/StripeContainer";

const  Cart=()=>{
const cartItems=useSelector(getCartItems);
const totalPrice=useSelector(getTotalPrice)

    return (
        <div>
       <h3>TOTAL: $ {totalPrice} </h3>
           
      
      <StripeContainer/>

       {cartItems.map(cartItem=> <CartItem cartItem={cartItem}/>)}
    </div>

     
    )
}


export default Cart;