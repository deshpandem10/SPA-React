import React from 'react';

import '../assets/scss/card.scss';

const SmallCard = (props) => {
    return (
        <>
            <div className='smallCard'>
                <div className='icon'>
                    {props.icon}
                </div>
                <div className='body'>
                    <p>{props.skill}</p>
                </div>
            </div>
        </>
    )
}

export default SmallCard;