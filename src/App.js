import React  from 'react';
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Catalog from './Components/Catalog';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Log from './Components/Log';

import { useSelector } from "react-redux";

import { getTotalQuantity } from './redux/cartSlice';



function App() {
  const totalQuantity=useSelector(getTotalQuantity);

   return  <Router>

<nav>
<Link to="/" className='logo'>FURNIX</Link>
<Link to="/" className='Link linltxt'>HOME</Link>
<Link to="/about" className='Link linltxt'>ABOUT</Link>
<Link to="/catalog" className='Link  linltxt'>CATALOG</Link>
<Link to="/contact" className='Link  linltxt'>CONTACT</Link>
<Link to="/log" className="Link linltxt">LOG IN</Link>

<Link to="/cart" className='Link'>
  <div className='bg'>
<div className='count'>
<span>{totalQuantity}</span>
</div>
</div>
<img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cart" width="30px" />

</Link>



</nav>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/catalog" element={<Catalog/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/log" element={<Log/>}/>          
<Route path="/cart" element={<Cart/> }/>



</Routes>
<Footer/>
  </Router>
  
    
}

export default App;
