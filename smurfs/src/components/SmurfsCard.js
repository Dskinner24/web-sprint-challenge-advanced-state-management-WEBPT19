import React from 'react';

const smurfCard = (props) => {
    return(
        <div className='cards'>
            <h2>{props.smurf.name}</h2>
            <h2>{props.smurf.age} yr</h2>
            <h2>{props.smurf.height} cm</h2>
        </div>
    )
}

export default smurfCard;