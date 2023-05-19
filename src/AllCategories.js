import Filter from './Filter'

const AllCategories = () =>{
    return ( <div>
<h1>HOME FURNITURE</h1>

{["All","Chair","Sofa","Bed","Table","Mirror","Dresser"].

map(category=> <Filter category={category}/>)
}



    </div>

    )
}


export default AllCategories;