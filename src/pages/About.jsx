import React from 'react';
import './about.scss';
import { GiBookshelf } from 'react-icons/gi';

const About = () => {
    return (
        <div className='about' id='omnie'>

           
            <div className="container">   
                <div className='left'>  

                <div className="headline">
                    <h4> &#160; O mnie </h4>
                </div>
                    
                    <div className='picture'/>
                    <div className='icon'>
                        <GiBookshelf/>
                    </div>

                </div>
                <div className='right'>        
                <p>TEKST PRZYKŁADOWY </p>
            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus esse porro cumque optio! Aliquam corporis omnis esse maiores. Temporibus nisi esse eligendi ullam unde maxime a magni at eveniet!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus esse porro cumque optio! Aliquam corporis omnis esse maiores. Temporibus nisi esse eligendi ullam unde maxime a magni at eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus esse porro cumque optio! Aliquam corporis omnis esse maiores. Temporibus nisi esse eligendi ullam unde maxime a magni at eveniet!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus esse porro cumque optio! Aliquam corporis omnis esse maiores. Temporibus nisi esse eligendi ullam unde maxime a magni at eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus esse porro cumque optio! Aliquam corporis omnis esse maiores. Temporibus nisi esse eligendi ullam unde maxime a magni at eveniet!</p>

                </div>
            </div>
        
        </div>
    )
}

export default About
