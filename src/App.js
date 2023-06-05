import React  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Catalog from './Catalog';
import Contact from './Contact';
import Cart from './Cart';
import Log from './Log';




function App() {
   return <Router>

<nav>
<Link to="/" className='logo'>FURNIX</Link>
<Link to="/" className='Link'>HOME</Link>
<Link to="/about" className='Link'>ABOUT</Link>
<Link to="/catalog" className='Link'>CATALOG</Link>
<Link to="/contact" className='Link'>CONTACT</Link>
<Link to="/log" className="Link">LOG IN / OUT</Link>
<Link to="/cart" className='Link'><img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cart" width="30px"/></Link>
</nav>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/catalog" element={<Catalog/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/log" element={<Log/>}/>          
<Route path="/cart" element={<Cart/>}/>


</Routes>


  </Router>
        
}

export default App;
