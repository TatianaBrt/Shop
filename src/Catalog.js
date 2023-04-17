import Furniture from "./Furniture";
import Button from "./Button";
import { useState } from "react";
import { data } from "./data";

function Catalog(){
    
    const [furniture,setFurniture]=useState(data);
  

    const chosenFurniture=(model)=>{
     const newFurniture=data.filter(element=>
       element.model===model
       );
       setFurniture(newFurniture);
    }

    return  <div className="about">
    <h1 className="catalog">Home Furniture</h1>
    <Button filteredFurniture={chosenFurniture} />
    
<Furniture word={furniture}/>

   
    
    </div>   
  
}



export default Catalog;