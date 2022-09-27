import React from 'react';

import SmallCard from './SmallCard';

const Skills = () => {
    return (
        <>
            <SmallCard icon={<i className='bx bxl-html5'></i>} skill='HTML5' />
            <SmallCard icon={<i className='bx bxl-css3'></i>} skill='CSS3' />
            <SmallCard icon={<i className='bx bxl-javascript'></i>} skill='JavaScript' />
            <SmallCard icon={<i className='bx bxl-jquery'></i>} skill='jQuery' />
            <SmallCard icon={<i className='bx bxl-bootstrap'></i>} skill='Bootstrap' />
            <SmallCard icon={<i className='bx bxl-sass' ></i>} skill='Sass' />
            <SmallCard icon={<i className='bx bxl-react'></i>} skill='React' />
            <SmallCard icon={<i className='bx bxl-git'></i>} skill='Git' />
        </>
    );
}

export default Skills;