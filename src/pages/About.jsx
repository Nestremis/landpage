import React from 'react';
import './about.scss';
import { GiBookshelf } from 'react-icons/gi';

const About = () => {
    return (
        <div className='about' id='omnie'>

            <div className="headline">
                <h4> &#160; o mnie </h4>
            </div>

            <div className="container">   
                <div className='left'>  
                    <div className='picture'/>
                    <div className='icon'>
                        <GiBookshelf/>
                    </div>

                </div>
                <div className='right'>        
                   <h5> O mnie. </h5>
                    <p>Nie lubię się lansować. Więc nie biorę rozmachu...  </p>
                    Ukończyłam psychologię na Uniwersytecie Jegiellońskim. Pracowałam 8 lat w PPP diagnozując dzieci oraz prowadząc z nimi terapie - szczególnie przy trudnościach w nauce (opóźnienia rozwojowe, dyleksja, dysgrafia itp.) Obecnie nauczam zdalnie angielskiego wykrzystując doświadczenie. Moje zainteresowania są obecnie ukierunkowane na psycholongwistykę. 
                </div>
            </div>
        
        </div>
    )
}

export default About
