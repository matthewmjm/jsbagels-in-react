import React from 'react';


const Bagel = (props) => {
    return (
        <div>------------------------
            <h3>#{props.newBagelKey} - {props.newBagelType}</h3>
            <p>{props.newBagelType}'s Rating:{props.newBagelRating}</p>
        </div>
    )
}
    


export default Bagel