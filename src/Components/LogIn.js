import React  from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css';

import { useNavigate } from 'react-router-dom'
import { Children } from 'types'


const LogIn=()=>{
   const Auth0ProviderWithNavigate = ({ children }: Children) => {
 const navigate = useNavigate()

      const onRedirectCallback = (appState: { returnTo?: `https://furniture-v1gs.onrender.com/log` })

         
   
 const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        !isAuthenticated && (
 <div className='log'>

      <button className='login'  onClick={() => loginWithRedirect()} >Log In</button>
    </div>
    ))
}


export default LogIn;
