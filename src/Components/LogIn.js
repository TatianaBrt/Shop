import React  from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css';

const LogIn=()=>{
      
 
 const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        !isAuthenticated && (
 <div className='log'>

      <button className='login'  onClick={() => loginWithRedirect()} >Log In</button>
    
    </div>
    ))
}



export default LogIn;
