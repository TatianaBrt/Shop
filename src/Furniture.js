function Furniture({word}){

  
    return(
        <div className="products">
        {word.map((thing=>{
        const{id,image,namef,description,price}=thing;
return(
  
    <div className="product-card" key={id}>
    <img src={image} width="300px" height="350px" alt="furniture"/>
    <div className="product-info">
   <h3>{namef}</h3>
   <p className="description">{description.substring(400)}</p>
    <h4>${price}</h4>
   <button className="details" >Details</button>
    </div>
    </div>
)

        }))}
        </div>
    )

}






export default Furniture;