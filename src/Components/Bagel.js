import React from 'react';


const Bagel = (props) => {
    console.log(props)
    return (
        <div>------------------------
            {/* <h3>#{props.newBagelKey} - {props.newBagelType}</h3>
            <p>{props.newBagelType}'s Rating:{props.newBagelRating}</p> */}
            <h3>{props.newBagelType}</h3>
            <p>Rating:{props.newBagelRating}</p>
            <button onClick={()=> props.deleteBagel(props.bagel)}>Delete</button>
        </div>
    )
}
    


export default Bagel