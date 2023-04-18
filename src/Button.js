
function Button({filteredFurniture,filteredAll}){


    return(
        <div className="cont">
  <button className="change" onClick={()=>filteredAll("all")}>All</button>
  <button className="change" onClick={()=>filteredFurniture("chair")}>chair</button>
  <button className="change" onClick={()=>filteredFurniture("sofa")}>sofa</button>
  <button className="change" onClick={()=>filteredFurniture("table")}>table</button>
  <button className="change" onClick={()=>filteredFurniture("mirror")}>mirror</button>
  <button className="change" onClick={()=>filteredFurniture("dresser")}>dresser</button>
  <button className="change" onClick={()=>filteredFurniture("bed")}>bed</button>
        </div>
    )

}






export default Button;