import React, { Component } from 'react';

import Skills from '../components/Skills';

class About extends Component {
    render () {
        return (
            <div className="container">
                <h1 className='pagehead'>About me</h1>
                <p>
                    Hey, I'm Madhura!
                </p>
                <p>
                    I'm a passionate UI/UX, Frontend Developer working at  
                    <strong><a target='_blank' href='https://www.tobeprecise.com/'> Precise Communications Design LLC</a></strong>.
                    I have extensive experience working with various front-end technologies and frameworks. 
                </p>
                <p>
                    I am fluent in classic technologies - HTML, CSS, JavaScript and CSS framework Bootstrap and SASS/SCSS. 
                </p>
                <p>
                    I am currently taking efforts to gain expertise on JavaScript framework React.js and Redux. 
                    What you are seeing now is my portfolio developed in React to showcase my skills.
                </p>
                <p>
                    In my leisure time I like listening to Indian Classical music and play Harmonium. 
                    I enjoy watching feel-good and Korean movies/TV series on Netflix {String.fromCodePoint('0x1f60A')}.
                </p>

                <div className='skills'>
                    <p>My professional skillset include : </p>
                    
                    <div className='d-flex flex-wrap'>
                        <Skills />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;