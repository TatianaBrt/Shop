import React  from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Secret=()=>{
    const {isAuthenticated } = useAuth0();
    return(
        isAuthenticated &&(
        <div>
   <p>You are logged in a website!</p>
        </div>
    ))
}


export default Secret;