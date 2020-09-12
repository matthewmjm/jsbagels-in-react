import React from 'react';
// import Delete from './Delete'
import Bagel from './Bagel'

const BagelsContainer = (props) => {
    // const bagelRender = props.bagelsProp.map(bagelEach => <Bagel newBagel={bagelEach}/>)
    const bagelRender = props.bagelsProp.map(bagelEach => <Bagel 
        bagel={bagelEach}
        newBagelKey={bagelEach.id} 
        newBagelType={bagelEach.type} 
        newBagelRating={bagelEach.rating} 
        deleteBagel={props.deleteBagel}
        />)
    return( 
        <>
            <h3>This is the Bagels Container</h3>
            <div>
                {/* <Delete/> */}
                {bagelRender}
            </div>
        </>
    ) 
}

export default BagelsContainer